import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get('/data')
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