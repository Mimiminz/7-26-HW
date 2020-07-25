import React from 'react';
//import { sum as add, multiple } from './Math'
//import Math from './Math'
import {BrowserRouter} from 'react-router-dom';
import RouterApp from "./RouterApp";
import Header from './components/Header'
import './App.css';

function App() {
  {/*const sum = 'SUM!';*/}
  {/*console.log(sum)*/}
  {/*console.log(add)*/}
  {/*console.log(multiple)*/}
  const cityName = 'Seoul';

  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;
