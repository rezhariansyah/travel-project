import React, { Fragment } from "react";
import banner from '../../assets/images/banner1.jpg'

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
        <div className="container">
          
        </div>
      </div>
    </Fragment>
  );
};

export default Jumbotron;
