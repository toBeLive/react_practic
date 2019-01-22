import React from 'react';
import TodoListItem from './todo-list-item.js';
import * as Language from './languageApp.js';

const currentLanguage = Language.langRu;

// список дел
const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key = { id }>
                <TodoListItem { ...itemProps } />
            </li>
        );
    });

    return (
        <ul>
            {elements}
            <li>{ currentLanguage.linkToQB }</li>
        </ul>
    );
};

export default TodoList;
