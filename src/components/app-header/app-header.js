import React from 'react';

import * as Language from '../languageApp.js';

import './app-header.css';

const currentLanguage = Language.langRu;

const AppHeader = ({toDo, done}) => {
    return (
        <div>
            <div>
                <select id = 'selLeng'>
                    <option value = 'UA'>Українська</option>
                    <option value = 'RU'>Русский</option>
                    <option value = 'EN'>English</option>
                </select>
            </div>
            <div className="app-header d-flex">
                <h1>Todo List</h1>
                <h2>{toDo} more to do, {done} done</h2>
            </div>
        </div>
    );
};

export default AppHeader;
