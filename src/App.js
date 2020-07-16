import React from 'react';
import './App.css';

import Home from './pages/home';
import Rooms from './pages/rooms';
import Singleroom from './pages/singleroom';
import Error from './pages/error';

import {Route, Switch} from "react-router-dom";
 
import NavBar from "./components/NavBar";

function App() {
  return (
<>
<NavBar />
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/rooms/" component={Rooms} />
<Route exact path="/rooms/:slug" component={Singleroom} />
<Route component={Error} />

</Switch>
  </> 

  );
}

export default App;
