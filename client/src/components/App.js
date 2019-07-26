import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { RegisterView, LoginView, AddTradeView, ShowTradesView, ShowTradeView, EditTradeView, ProfileView, AboutView } from './views';
import { UserProvider } from '../contexts/UserContext';
import { NavBar } from './basic-components';
import { PrivateRoute } from './authentication';
import authService from '../services/auth-service';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/users/loggedin')
      .then(res => res.json())
      .then(json => {
        if (json.loggedIn) {
          setUser(json);
          authService.isAuthenticated = true;
        }
      });
  }, []);

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={RegisterView} />
            <Route exact path='/trades' component={ShowTradesView} />
            <Route exact path='/about' component={AboutView} />
            <Route exact path='/profiles/:id' component={ProfileView} />
            <Switch>
              <PrivateRoute exact path='/trades/add' component={AddTradeView} />
              <PrivateRoute exact path='/trades/:id/edit' component={EditTradeView} />
              <Route path='/trades/:id' component={ShowTradeView} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
