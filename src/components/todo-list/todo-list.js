import React from 'react';

import * as Language from '../languageApp.js';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const currentLanguage = Language.langRu;

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li className = 'list-group-item' key = { id }>
                <TodoListItem { ...itemProps } />
            </li>
        );
    });

    return (
        <ul className = 'list-group todo-list'>
            { elements }
            <li>{ currentLanguage.linkToQB }</li>
        </ul>
    );
};

export default TodoList;
