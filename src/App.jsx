import React, { useRef, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

export function App() {
    const taskRef = useRef();
    const [listas, setListas] = useState([{ id: 1, task: "Caminar", completed: false }]);

    const handleTaskAdd = () => {
        const task = taskRef.current.value;
        // 1 == '1' (igual)    1 === '1' (idéntico)
        if (task === "") return;

        setListas((prev) => [...prev, { id: uuidv4(), task, completed: false }]);

        taskRef.current.value = "";
    }

    return <Fragment>
        <input ref={taskRef} type="text" placeholder="Nueva tarea" />
        <button onClick={handleTaskAdd}>+</button>
        <button>-</button>
        <TodoList listas={listas} />
    </Fragment>
        ;
}