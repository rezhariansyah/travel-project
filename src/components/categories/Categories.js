import React from "react";
import "./Categories.css";
import aboutImage from "../../assets/images/categories/aboutImage.jpg";
import travelImage from "../../assets/images/categories/travelImage.png";
import healthImage from "../../assets/images/categories/healthImage.jpg";
import tipsImage from "../../assets/images/categories/tipsImage.jpg"

const Categories = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2>CATEGORIES</h2>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-md-3">
          <div className="card" style={{ width: "17rem" }}>
            <img src={aboutImage} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">ABOUT</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "17rem" }}>
            <img src={travelImage} className="card-img-top card-category" alt="" />
            <div className="card-body">
              <h5 className="card-title">TRAVEL</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "17rem" }}>
            <img src={healthImage} className="card-img-top card-category" alt="" />
            <div className="card-body">
              <h5 className="card-title">HEALTH</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "17rem" }}>
            <img src={tipsImage} className="card-img-top card-category" alt="" />
            <div className="card-body">
              <h5 className="card-title">TIPS</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
