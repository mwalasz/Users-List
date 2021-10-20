import { React } from 'react';
import { SEARCH_PLACEHOLDER } from '../../utils/texts';

const Search = ({ text, onTextChange }) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={SEARCH_PLACEHOLDER}
            value={text}
            onChange={onTextChange}
        />
    );
};

export default Search;
