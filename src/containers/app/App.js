import React, { Component } from 'react';
import SideNavigation from '../../components/navigation/SideNavigation';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <SideNavigation/>
      </div>
    );
  }
}

export default App;
