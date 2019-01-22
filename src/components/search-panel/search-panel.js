import React from 'react';

import * as Language from '../languageApp.js';

import './search-panel.css';

const currentLanguage = Language.langRu;

const SearchPanel = () => {
    return (
        <input
            className = 'form-control search-input'
            placeholder = { currentLanguage.search }
            type = 'text'
        />
    );
};

export default SearchPanel;
