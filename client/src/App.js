import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomChoice from './components/room-choice';
import Room from './components/room';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={RoomChoice} />
          <Route exact path="/room/:id" component={Room} />
        </div>
      </Router>
    );
  }
}

export default App;
