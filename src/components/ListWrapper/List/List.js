import { React } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemPropTypes } from '../ListItem/ListItem';
import { EMPTY_LIST, NO_USER_FOUND } from '../../../utils/texts';

const List = ({ items, isDataFiltered }) => {
    if (items.length > 0) {
        return (
            <ol>
                {items.map(({ id, name, username }) => (
                    <ListItem key={id} username={username} name={name} />
                ))}
            </ol>
        );
    }

    return <p>{isDataFiltered ? NO_USER_FOUND : EMPTY_LIST}</p>;
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(ListItemPropTypes)),
    isDataFiltered: PropTypes.bool.isRequired,
};

export default List;
