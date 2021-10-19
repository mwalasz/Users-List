import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';
import { ALL_USERS } from '../../utils/endoints';
import { EMPTY_LIST, NO_USER_FOUND } from '../../utils/texts';

const List = ({ searchText }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(ALL_USERS)
            .then((response) => response.json())
            .then(setUsers)
            .catch((error) => {
                window.alert(
                    `Error occurred while retrieving user list. ${
                        error.message || ''
                    }`
                );
            });
    }, []);

    useEffect(() => {
        if (searchText !== '') {
            setUsers(() =>
                users.filter(({ name }) =>
                    name.toLowerCase().includes(searchText.toLowerCase())
                )
            );
        }
    }, [searchText]);

    const renderUsers = () => (
        <ol>
            {users.map(({ id, name, username }) => (
                <ListItem key={id} username={username} name={name} />
            ))}
        </ol>
    );

    const renderEmptyList = () => (
        <p>{searchText !== '' ? NO_USER_FOUND : EMPTY_LIST}</p>
    );

    return users.length > 0 ? renderUsers() : renderEmptyList();
};

List.propTypes = {
    searchText: PropTypes.string,
};

export default List;
