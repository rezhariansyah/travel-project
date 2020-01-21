import React, { Fragment } from "react";
import "./Categories.css";
import aboutImage from "../../assets/images/categories/about.jpg";
import travelImage from "../../assets/images/categories/travel.png";
import healthImage from "../../assets/images/categories/health.jpg";
import tipsImage from "../../assets/images/categories/tips.jpg";
import LatestArticle from "../latestArticle/LatestArticle";

const Categories = () => {
  return (
    <Fragment>
      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="row">
          <div className="col-12 text-center mt-5 mb-5">
            <h1>CATEGORIES</h1>
          </div>
        </div>
        <div className="row justify-content-center mx-auto">
          <div className="col-sm-3 opacity" style={{ padding: "0px" }}>
            <div className="card" style={{ width: "100%", height: "638px" }}>
              <img
                src={aboutImage}
                className="card-img-top img-responsive"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">ABOUT</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-sm-4 opacity" style={{ paddingRight: "0px" }}>
                <div className="card" style={{ width: "100%", position:"relative" }}>
                  <img
                    src={travelImage}
                    className="card-img-top img-responsive card-categories"
                    alt=""
                  />
                  <div className="tagCategory">
                    <p style={{fontWeight:"bold", color:"white"}}>Travel</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 opacity" style={{ paddingRight: "0px" }}>
                <div className="card " style={{ width: "100%" }}>
                  <img
                    src={healthImage}
                    className="card-img-top img-responsive card-categories"
                    alt=""
                  />
                  <div className="tagCategory">
                    <p style={{fontWeight:"bold", color:"white"}}>Health</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 opacity" style={{ paddingRight: "0px" }}>
                <div className="card" style={{ width: "100%" }}>
                  <img
                    src={tipsImage}
                    className="card-img-top img-responsive card-categories"
                    alt=""
                  />
                  <div className="tagCategory">
                    <p style={{fontWeight:"bold", color:"white"}}>Tips</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12 text-center"
                style={{ paddingRight: "0px" }}
              >
                <LatestArticle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
