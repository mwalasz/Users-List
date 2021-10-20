import { React } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ id, username, name }) => (
    <li key={id} className="item" data-testid="item">
        <span className="name">{name}</span>
        <span>{`@${username}`}</span>
    </li>
);

const ListItemPropTypes = {
    id: PropTypes.number,
    username: PropTypes.string,
    name: PropTypes.string,
};
ListItem.propTypes = ListItemPropTypes;

export { ListItem, ListItemPropTypes };
