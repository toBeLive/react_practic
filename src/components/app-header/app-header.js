import React, { Component } from 'react';
import * as Language from '../languageApp.js';

import './app-header.css';

const currentLanguage = Language.langRu;

export default class AppHeader extends Component {

    onSetLanguage (e) {
        const { value } = e.target;

        console.log(`1: ${value}`);

        /*
        switch ({ value }) {
            case 'RU': this.currentLanguage = Language.langRu;
                break;
            case 'UA': this.currentLanguage = Language.langUa;
                break;
            case 'EN': cthis.currentLanguage = Language.langEn;
                break;
            default: this.currentLanguage = Language.langUa;
        }
        */
    }

    render () {

        const { toDo, done } = this.props;

        return (
            <div>
                <div>
                    <select
                        id = 'selectLeng'
                        onChange = { this.onSetLanguage }>
                        <option value = 'UA'>Українська</option>
                        <option value = 'RU'>Русский</option>
                        <option value = 'EN'>English</option>
                    </select>
                </div>
                <div className = 'app-header d-flex'>
                    <h3>Todo List</h3>
                    <h6>{toDo} more to do, {done} done</h6>
                </div>
            </div>
        );
    }
}
