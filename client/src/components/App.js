import React, { useContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { PrivateRoute } from './authentication';
import SignUpView from './views/SignUpView';
import SignInView from './views/SignInView';
import AddTradeView from './views/AddTradeView';
import ShowTradesView from './views/ShowTradesView';
import ShowTradeView from './views/ShowTradeView';
import UserContext, { UserProvider } from '../contexts/UserContext';
import { NavBar } from './basic-components';


const Protected = () => <h3>Protected</h3>;
const Bogus = () => <h4>BOOOGUS</h4>;


function App() {
  const currentUser = useContext(UserContext);
  const [user, setUser] = useState(null);

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <>
            <Route exact path="/" component={SignInView} />
            <Route exact path="/login" component={SignInView} />
            <Route exact path="/register" component={SignUpView} />
            <Route exact path='/trades' component={ShowTradesView} />
            <Switch>
              <PrivateRoute exact path='/trades/add' component={AddTradeView} />
              <Route exact path='/trades/:id' component={ShowTradeView} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
