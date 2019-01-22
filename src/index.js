import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header.js';
import SearchPanel from './components/search-panel.js';
import TodoList from './components/todo-list';
import * as Language from './components/languageApp.js';

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
        { label: 'Build React App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = { todoData } />
        </div>
    );
};

//console.log(langRu);

ReactDOM.render(<App />, document.getElementById('root'));
