import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Errorr from './pages/Error';

import {Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >

      <Navbar/>
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/single-room" component={SingleRoom} />
        <Route path="/errorr" component={Errorr} />
      </Switch>

     {/* <Home/>
     <Rooms/>
     <SingleRoom/>
     <Error/> */}
    </div>
  );
}

export default App;
