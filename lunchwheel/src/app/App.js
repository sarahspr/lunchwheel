import React from 'react';
import './App.scss';

//Imports Components
import Header from '../components/Header';
import Wheel from '../components/Wheel/';

function App() {
  return (
    <div className="App">
      <Header title='Wheel of Indecision' />
      <Wheel />
    </div>
  );
}

export default App;
