import React, { Component, Fragment } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Header from "../../components/header/Header";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Jumbotron />
      </Fragment>
    );
  }
}

export default Home;
