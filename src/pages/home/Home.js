import React, { Component, Fragment } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron.js";
import Categories from "../../components/categories/Categories";
import Banner from "../../components/banner/Banner.js";
import Galeries from "../../components/galeries/Galeries.js";
import Footer from "../../components/footer/Footer.js";


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron />
        <Categories />
        <Banner />
        <Galeries />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
