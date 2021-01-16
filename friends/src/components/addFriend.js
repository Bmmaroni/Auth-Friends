import React from 'react'
import axios from 'axios';

class addFriend extends React.Component {
  state = {
    friend: {
      id: getNextId(),
      name: '',
      age: '',
      email: ''
    }
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  formSubmit = e => {
    e.preventDefault();
    axios 
      .post('http://localhost:5000/api/friends', this.state.friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <div>
        <h2>Add Another Friend</h2>
        <form onSubmit={this.formSubmit}>
          <input
            type='text'
            name='name'
            onChange={this.handleChanges}
            value={this.state.friend.name}
          />
          <input
            type='text'
            name='age'
            onChange={this.handleChanges}
            value={this.state.friend.age}
          />
          <input
            type='text'
            name='email'
            onChange={this.handleChanges}
            value={this.state.friend.email}
          />
        </form>
      </div>
    )
  }

}

export default addFriend;