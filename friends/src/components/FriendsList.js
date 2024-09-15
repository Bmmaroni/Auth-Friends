import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';


class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res);
        this.setState({
          friendsList: res.data
        })
      })
      .catch(err => {console.log(err)});
  };

  addFriend = () => {

  }

  render() {
    return(
      <div>
        {this.state.friendsList.map((friend) => {
          return(
            <Friend
              key={friend.id}
              friend={friend}
            />
          )
        })}
      </div>
    );
  }
};

export default FriendsList;