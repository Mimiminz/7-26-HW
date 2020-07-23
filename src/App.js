import React from 'react';
//import { sum as add, multiple } from './Math'
//import Math from './Math'
import Header from './components/Header'
import './App.css';

function App() {
//  const sum = 'SUM!';
//  console.log(sum)
//  console.log(add)
//  console.log(multiple)
  const cityName = 'Seoul';

  return (
    <div className="App">
      <Header cityName = {cityName}/>
      <p>Hello World</p>
    </div>
  );
}

export default App;
