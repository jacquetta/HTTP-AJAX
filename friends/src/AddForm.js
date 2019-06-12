import React from 'react';
import axios from 'axios';



class AddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friends: {
                name: "",
                age: "",
                email: ""
            }
        };
    }

    handlerChange = event => {
        event.persist();
        let value =  event.target.value;
        this.setState(prevState => ({
            friend: { ...prevState.friends, [event.target.name]:value}
        }));
    };

    submitHandler = e => {
        e.preventDefault();
        axios
        .post('https://localhost:5000/friends', this.state.friends)
        .then(response => {
            this.props.updateFriends(response.data);
            this.props.history.push('/friends-list');
        })
        .catch(error => console.log(error));
    };

    putHandler = event => {
        event.preventDefault();
        axios.put(`https://localhost:5000/friends`, this.state.friends);
    };

    render(){
        return (
          <div>
            <h2>Add New Friend</h2>
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                name="name"
                onChange={this.handlerChange}
                placeholder="First Name"
                value={this.state.friends.name}
              />
              <div className="baseline" />

              <input
                type="number"
                name="age"
                onChange={this.handlerChange}
                placeholder="Age"
                value={this.state.friends.age}
              />
              <div className="baseline" />

              <input
                type="text"
                name="email"
                onChange={this.handlerChange}
                placeholder="Email"
                value={this.state.friends.email}
              />
              <div className="baseline" />

              <button type="submit">Add Friend</button>
            </form>
          </div>
        );
    }
}

export default AddForm;