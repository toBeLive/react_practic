import React from 'react';
import * as Language from './languageApp.js';

const currentLanguage = Language.langRu;

// заголовок
const AppHeader = () => {
    return (
        <div>
            <h1>Testy</h1>
            <div>
                <select id = 'selLeng'>
                    <option value = 'UA'>Українська</option>
                    <option value = 'RU'>Русский</option>
                    <option value = 'EN'>English</option>
                </select>
            </div>
        </div>
    );
};

export default AppHeader;
