import React from 'react'
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

class AddFriend extends React.Component {
  state = {
    friend: {
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
    axiosWithAuth() 
      .post('http://localhost:5000/api/friends', this.state.friend)
      .then(res => {
        console.log(res);
        this.setState({
          friend: {
            name: '',
            age: '',
            email: ''
          }
        })
        this.props.history.push('/friendslist');
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
            placeholder='name'
            onChange={this.handleChanges}
            value={this.state.friend.name}
          />
          <input
            type='text'
            name='age'
            placeholder='age'
            onChange={this.handleChanges}
            value={this.state.friend.age}
          />
          <input
            type='text'
            name='email'
            placeholder='email'
            onChange={this.handleChanges}
            value={this.state.friend.email}
          />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddFriend;