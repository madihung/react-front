import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Max Schwarz', 
            image:'https://i.kym-cdn.com/photos/images/newsfeed/002/701/139/063.jpg',
            places: 3
        }
    ];

    return <UserList items={USERS} />
};

export default Users;