import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/contact" component={Contact} exact />
    </Fragment>
  );
}

export default App;
