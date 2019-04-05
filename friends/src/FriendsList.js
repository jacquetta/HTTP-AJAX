import React from 'react';
import axios from 'axios';

import './friendslist.css';


class FriendsList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            friends: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({friends: response.data}));
        })
        .catch(error => {
            console.log('Server Error', error);
        });
    }

    render(){
        return(
        <div className='w3-row-padding w3-container'> 
            {this.state.friends.map(friend => (
            <div className='friendsList w3-card-4 w3-third'>
                <header className='w3-container color-header'>
                    <h3>{friend.name}</h3>
                </header>
                <div className='w3-container'>
                    <p>age: {friend.age}</p>
                    <p>email: {friend.email}</p>
                </div>
                <button className='color-btn'>Update</button>
                <button className='color-btn'>Delete</button>
            </div>    
                    
            ))}

        </div>  
        )
    }
}
export default FriendsList;