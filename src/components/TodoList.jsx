import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ listas }) {
    return (
        <ul>
            {listas.map((lista) =>
                <li>
                    <TodoItem key={lista.id} task={lista.task} />
                </li>
            )}
        </ul>
    )
}