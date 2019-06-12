import React from 'react';
import axios from 'axios';

import './friendslist.css';


function FriendsList(props){
    const keys = props.match.params.id;

    const friend = props.friends.find(
        person => `${person.id}` === keys
    );

    
    const deleteMe = event => {
        axios
        .delete(`http://localhost:5000/friends-list/${friend.id}`)
        .then(response => {
            props.updateFriends(response.data);
            props.history.push("/friends-list");
        })
        .catch(err => console.log(err));
    };

        
        return(
        <div className='w3-row-padding w3-container'> 
            {props.friends.map(friend => (
            <div className='friendsList w3-card-4 w3-third'>
                    <header className='w3-container color-header' key={friend.id}>
                    <h3>{friend.name}</h3>
                </header>
                <div className='w3-container'>
                    <p>age: {friend.age}</p>
                    <p>email: {friend.email}</p>
                </div>
                <button className='color-btn'>Update</button>
                <button className='color-btn' onClick={deleteMe}>Delete</button>
            </div>    
                    
            ))}

        </div>  
        )
}
export default FriendsList;