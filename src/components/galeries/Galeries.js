import React, { Component, Fragment } from "react";
import Gallery from "react-grid-gallery";
import { Fade } from "react-awesome-reveal";
import image1 from "../../assets/images/galeries/IMG_0182.jpg";
import image2 from "../../assets/images/galeries/IMG_0461.jpg";
import image3 from "../../assets/images/galeries/IMG_3178.JPG";
import image4 from "../../assets/images/categories/about.jpg";
import image5 from "../../assets/images/categories/health.jpg";
import image6 from "../../assets/images/categories/tips.jpg";
import image7 from "../../assets/images/categories/travel.png";

const images = [
  {
    src: image1,
    thumbnail: image1,
    thumbnailWidth: 380,
    thumbnailHeight: 412
  },
  {
    src: image2,
    thumbnail: image2,
    thumbnailWidth: 380,
    thumbnailHeight: 212
  },
  {
    src: image3,
    thumbnail: image3,
    thumbnailWidth: 380,
    thumbnailHeight: 212
  },
  {
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 380,
    thumbnailHeight: 412
  },
  {
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 380,
    thumbnailHeight: 212
  },
  {
    src: image6,
    thumbnail: image6,
    thumbnailWidth: 380,
    thumbnailHeight: 212
  },
  {
    src: image7,
    thumbnail: image7,
    thumbnailWidth: 380,
    thumbnailHeight: 212
  }
];

class Galeries extends Component {
  styleSmall() {
    return {
      width: "100%",
      backgroundSize: "cover",
      objectFit: "cover",
      cursor: "pointer"
    };
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <Fade delay={500}>
            <div className="row justify-content-center mt-5 mb-5">
              <div className="col-8 text-center">
                <h1>GALERIES</h1>
              </div>
            </div>
            <div className="row justify-content-center mx-auto">
              <div className="col-md-10 text-center">
                <Gallery
                  images={images}
                  thumbnailStyle={this.styleSmall}
                  enableImageSelection={false}
                />
              </div>
            </div>
          </Fade>
        </div>
      </Fragment>
    );
  }
}

export default Galeries;
