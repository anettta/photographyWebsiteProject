import React from 'react';
import './App.css';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Photograph from './pages/photograph';
import Error from './pages/error';
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Cart from  './components/Cart';
import Modal from './components/Modal';

function App() {
  return (
<>
<NavBar />

<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/rooms/" component={Gallery} />
<Route exact path="/cart/" component={Cart} />
<Route exact path="/rooms/:slug" component={Photograph} />

<Route component={Error} />


</Switch>
<Modal />
<Footer />
  </> 

  );
}

export default App;
