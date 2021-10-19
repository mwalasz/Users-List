import { React } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ key, username, name }) => (
    <li key={key} className="item">
        <span className="name">{name}</span>
        <span>{`@${username}`}</span>
    </li>
);

const ListItemPropTypes = PropTypes.shape({
    key: PropTypes.number,
    username: PropTypes.string,
    name: PropTypes.string,
});
ListItem.propTypes = ListItemPropTypes;

export { ListItem, ListItemPropTypes };
