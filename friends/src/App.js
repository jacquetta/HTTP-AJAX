import React from 'react';
import { Route } from 'react-router-dom';

import FriendsList from './FriendsList.js';
import Nav from './Nav.js';
import Form from './Form.js';

 class App extends React.Component {
    constructor(){
        super();

        this.state = {
            friends: []
        };
    }



    render(){
        return (
            <div className='App'>
                <Route path ='/' component={Nav} />
                <Route path='/friends-list' component={FriendsList} />
                <Route path='/form' component={Form} />
            </div>
        )
    }
}


export default App;