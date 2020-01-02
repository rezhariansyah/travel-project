import React, { Component, Fragment } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Jumbotron />
        <Categories />
      </Fragment>
    );
  }
}

export default Home;
