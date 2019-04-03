import React from 'react';
import axios from 'axios';


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
        <div>
            {this.state.friends.map(friend => (
            <div class='friends-list'>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
            </div>    
                    
            ))}

        </div>  
        )
    }
}
export default FriendsList;