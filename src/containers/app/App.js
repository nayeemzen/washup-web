import React, { Component } from 'react';
import SideNavigation from '../../components/navigation/SideNavigation';
import Content from '../content/Content';
import './App.css';

const App = () => (
    <div className="App">
      <SideNavigation/>
      <Content/>
    </div>
);

export default App;
