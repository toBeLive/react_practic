import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import * as Language from '../languageApp.js';

import './app.css';

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

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <div className = 'todo-app'>
            <AppHeader done = { 3 } toDo = { 1 } />
            <div className = 'top-panel d-flex'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos = { todoData } />
        </div>
    );
};

export default App;
