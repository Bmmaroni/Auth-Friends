import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data);
        this.props.history.push('/friendslist');
      })
      .catch(err => console.log(err));
  };

  render() {
    return(
      <div>
        <form onSubmit={this.login}>
          <input 
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type='text'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;