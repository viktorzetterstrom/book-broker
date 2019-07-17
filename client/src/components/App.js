import React, { useContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { PrivateRoute } from './authentication';
import SignUpView from './views/SignUpView';
import SignInView from './views/SignInView';
import CreateTradeView from './views/CreateTradeView';
import UserContext, { UserProvider } from '../contexts/UserContext';


const Protected = () => <h3>Protected</h3>;
const Bogus = () => <h4>BOOOGUS</h4>;


function App() {
  const currentUser = useContext(UserContext);
  const [user, setUser] = useState(null);

  const userLoggedInRoutes = (
    <>
      <Route exact path="/" component={Bogus} />
      <Route exact path="/login" component={CreateTradeView} />
      <Route exact path="/signup" component={Bogus} />
      <PrivateRoute exact path='/books/add' component={CreateTradeView} />
      <PrivateRoute path='/protected' component={Protected} />
    </>
  );

  const userNotLoggedInRoutes = (
    <>
      <Route exact path="/" component={SignInView} />
      <Route exact path="/login" component={SignInView} />
      <Route exact path="/signup" component={SignUpView} />
    </>
  );

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">
        <BrowserRouter>
          {
            user
              ? userLoggedInRoutes
              : userNotLoggedInRoutes
          }
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
