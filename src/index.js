import React from 'react';
import ReactDOM from 'react-dom';
import { langRu, langEn, langUa } from './languageApp.js';

let userLanguage = 'RU';
let currentLanguage = langUa;

function changeLanguage () {
    switch (userLanguage) {
        case 'RU': currentLanguage = langRu;
            break;
        case 'UA': currentLanguage = langUa;
            break;
        case 'EN': currentLanguage = langEn;
            break;
        default: currentLanguage = langUa;
    }
}

changeLanguage();

const el = (
    <div>
        <h1>Testy</h1>
        <input placeholder = { currentLanguage.search } />
        <ul>
            <li>{ currentLanguage.firstThing }</li>
            <li>{ currentLanguage.secondThing }</li>
        </ul>
    </div>
);

console.log(langRu);

ReactDOM.render(el, document.getElementById('root'));
