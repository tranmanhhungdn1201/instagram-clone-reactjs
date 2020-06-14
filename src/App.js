import React, { Component } from 'react';
import './App.css';
import routes from './Router';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        {routes}
      </Router>
    );
  }
}

export default App;
