import { React } from 'react';
import PropTypes from 'prop-types';
import { SEARCH_PLACEHOLDER } from '../../utils/texts';

const Search = ({ text, onTextChange }) => {
    return (
        <input
            data-testid="search"
            className="search"
            type="search"
            placeholder={SEARCH_PLACEHOLDER}
            value={text}
            onChange={onTextChange}
        />
    );
};

Search.propTypes = {
    text: PropTypes.string,
    onTextChange: PropTypes.func.isRequired,
};

export default Search;
