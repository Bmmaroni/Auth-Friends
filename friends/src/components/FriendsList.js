import React from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';


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

  render() {
    return(
      <div>

      </div>
    );
  }
};

export default FriendsList;