import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AuthExample from './AuthTest';
import './App.css';
import Login from './Login';
import CreateUser from './CreateUser';

function App() {
  return (
    <div className="App">
      <AuthExample />
    </div>
  );
}



export default App;
