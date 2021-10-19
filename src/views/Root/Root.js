import { React, useState } from 'react';
import Title from '../../components/Title/Title';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import Search from '../../components/Search/Search';
import './Root.css';

const Root = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="container">
            <Title />
            <Search
                text={searchText}
                onTextChange={({ target: { value } }) => setSearchText(value)}
            />
            <ListWrapper searchText={searchText} />
        </div>
    );
};

export default Root;
