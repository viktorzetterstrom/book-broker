import React, { useContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import PrivateRoute from './authentication/PrivateRoute';
import SignOutButton from './authentication/SignOutButton';
import UserContext, { UserProvider } from '../contexts/UserContext';

const Protected = () => <h3>Protected</h3>;

function App() {
  const currentUser = useContext(UserContext);
  const [user, setUser] = useState(null);
  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">
        <p>{user ? user.username : 'bogus'}</p>
        <BrowserRouter>
          <div>
            <h3>{currentUser.user}</h3>
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
    </UserProvider>
  );
}

export default App;
