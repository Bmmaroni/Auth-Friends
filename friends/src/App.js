import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to='/friendslist'>Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/friendslist'>
            <FriendsList />
          </PrivateRoute>
          <Route path='/login' component={Login} />
          <Route path='/login' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
