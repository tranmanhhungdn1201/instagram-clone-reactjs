import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import routes from './Router';
class App extends Component {
  render() {
    return (
      <>
        <Router routes={routes} />
        <Register />   
      </>
    );
  }
}

export default App;
