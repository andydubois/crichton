import React from 'react';
import './App.css';
import Home from '../Home/Home.jsx'
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;
