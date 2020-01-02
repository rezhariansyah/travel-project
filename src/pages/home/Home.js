import React, { Component, Fragment } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron.js";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import LatestArticle from "../../components/latestArticle/LatestArticle.js";
import Banner from "../../components/banner/Banner.js";
import Galeries from "../../components/galeries/Galeries.js";


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Jumbotron />
        <Categories />
        <LatestArticle />
        <Banner />
        <Galeries />
      </Fragment>
    );
  }
}

export default Home;
