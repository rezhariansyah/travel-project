import React, { Fragment } from "react";
import banner from "../../assets/images/banners/banner1.jpg";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <Fragment>
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          height: "684px",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "-56px"
        }}
      >
        <div className="container"></div>
      </div>
    </Fragment>
  );
};

export default Jumbotron;
