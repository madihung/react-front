import React from 'react'
import './UserList.css';
import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';

const UserList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>  
                    <h2>No users found.</h2>
                </Card>
        </div>
        );
    }
    return (
        <ul className='user-list'>
        {props.items.map(user => (
            <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name}
                placeCount={user.places}
            />
        ))}
        </ul>
    );
};

export default UserList;
