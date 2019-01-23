import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';


import * as Language from '../languageApp.js';

import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ],
    };

    deleteItem = (id) => {
        console.log(id);
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];

            return {
                todoData: newArray,
            };
        });
    };

    /*
    let userLanguage = 'RU';
    let currentLanguage = Language.langRu;

    function changeLanguage () {
        userLanguage = document.getElementById("selLeng").value;
        console.log(userLanguage);
        switch (userLanguage) {
            case 'RU': currentLanguage = Language.langRu;
                break;
            case 'UA': currentLanguage = Language.langUa;
                break;
            case 'EN': currentLanguage = Language.langEn;
                break;
            default: currentLanguage = Language.langUa;
        }
    }
    console.log(userLanguage);
    console.log(currentLanguage);
    */

    render () {
        return (
            <div className = 'todo-app'>
                <AppHeader done = { 3 } toDo = { 1 } />
                <div className = 'top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos = { this.state.todoData }
                    onDelete = { this.deleteItem }
                />
                <ItemAddForm />
            </div>
        );
    }
}
