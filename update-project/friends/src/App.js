import React from 'react';
import { Route } from 'react-router-dom';
import axios from "axios";

import FriendsList from './FriendsList.js';
import Nav from './Nav.js';
import AddForm from './AddForm.js';


 class App extends React.Component {
    constructor(){
        super();

        this.state = {
            friends: []
        };
    }

    updateFriends = newFriends => {
        this.setState({
            friends: newFriends
        });
    }

    componentDidMount(){
        axios
        .get('http://localhost:5000/friends')
        .then(response => this.setState({
            friends: response.data
        }))
        .catch(error => console.log(error));
    }

    render(){
        return (
            <div className='App'>
                <Route path ='/' component={Nav} />
                <Route exact path='/friends-list' render={props => (<FriendsList {...props} friends={this.state.friends} />)} />
                <Route path='/add-form' render={props => ( <AddForm {...props} updateFriends={this.updateFriends} /> )} />
            </div>
        )
    }
}


export default App;