import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
    <Fragment>
      <Route path="/" component={Home} exact />
    </Fragment>
  );
}

export default App;
