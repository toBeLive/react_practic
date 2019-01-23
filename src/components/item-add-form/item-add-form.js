import React, { Component } from 'react';
import * as Language from '../languageApp.js';

import './item-add-form.css';

const currentLanguage = Language.langRu;

export default class ItemAddForm extends Component {
    render () {
        return (
            <div className = 'd-flex item-add-form'>
                <input
                    className = 'form-control item-add-input'
                    placeholder = { currentLanguage.search }
                    type = 'text'
                />
                <button
                    className = 'btn btn-outline-secondary'
                    onClick = { () => this.props.onItemAdded('Hello World') }>
                    Add Item
                </button>
            </div>
        );
    }
}
