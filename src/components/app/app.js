/* eslint-disable react/jsx-sort-props */
import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';


//import * as Language from '../languageApp.js';

import './app.css';


export default class App extends Component {

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

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee', 1),
            this.createTodoItem('Make Awesome App', 2),
            this.createTodoItem('Have a lunch', 3)
        ],
    };

    maxId = 100;

    createTodoItem (label, id) {
        return {
            label,
            important: false,
            done:      false,
            id,
        };
    }

    addItem = (text) => {
        console.log('Add', text);
        const id = this.maxId +=1;
        const newItem = this.createTodoItem(text, id);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr,
            };
        });
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

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = { ...oldItem, done: !oldItem.done };

            const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)];

            console.log('Toggle Done', id);

            return {
                todoData: newArray,
            };
        });
    };

    onToggleImportant = (id) => {
        console.log('Toggle Important', id);
    };

    render () {

        //const doneCount = this.state.todoData.filter();


        return (
            <div className = 'todo-app'>
                <AppHeader done = { 3 } toDo = { 1 } />
                <div className = 'top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    onDelete = { this.deleteItem }
                    onToggleDone = { this.onToggleDone }
                    onToggleImportant = { this.onToggleImportant }
                    todos = { this.state.todoData }
                />
                <ItemAddForm onItemAdded = { this.addItem } />
            </div>
        );
    }
}
