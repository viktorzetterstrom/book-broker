import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import PrivateRoute from './authentication/PrivateRoute';
import SignOutButton from './authentication/SignOutButton';

const Protected = () => <h3>Protected</h3>;

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <div>
          <SignOutButton />
          <ul>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path='/protected' component={Protected} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
