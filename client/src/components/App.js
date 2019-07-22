import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { PrivateRoute } from './authentication';
import { RegisterView, LoginView, AddTradeView, ShowTradesView, ShowTradeView, EditTradeView, ProfileView } from './views';
import { UserProvider } from '../contexts/UserContext';
import { NavBar } from './basic-components';



function App() {
  const [user, setUser] = useState(null);

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
            <Route exact path='/profiles/:id' component={ProfileView} />
            <Switch>
              <Route exact path='/trades/add' component={AddTradeView} />
              <Route exact path='/trades/:id/edit' component={EditTradeView} />
              <Route exact path='/trades/:id' component={ShowTradeView} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
