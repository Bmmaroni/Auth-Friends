import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";

import Login from './components/Login';
import './App.css';

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
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected'>

          </PrivateRoute>
          <Route path='/login' component={Login} />
          <Route path='/login' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
