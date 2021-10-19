import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import { ALL_USERS } from '../../utils/endoints';

const ListWrapper = ({ searchText }) => {
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

    const filterUsers = () => {
        let usersToDisplay = users;
        if (searchText !== '') {
            usersToDisplay = users.filter(({ name }) =>
                name.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        return usersToDisplay;
    };

    return <List items={filterUsers()} isDataFiltered={searchText !== ''} />;
};

ListWrapper.propTypes = {
    searchText: PropTypes.string,
};

export default ListWrapper;
