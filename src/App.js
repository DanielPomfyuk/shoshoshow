import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom" 
import Home from "../src/components/pages/Home"
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
        <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
