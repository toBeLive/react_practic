import React from 'react';
import * as Language from './languageApp.js';

const currentLanguage = Language.langRu;

// панель поиска
const SearchPanel = () => {
    const searchStyle = {
        fontSize: '12px',
    };

    return (
        <input
            placeholder = { currentLanguage.search }
            style = { searchStyle }
        />
    );
};

export default SearchPanel;
