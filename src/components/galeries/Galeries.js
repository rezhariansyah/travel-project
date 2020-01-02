import React, { Component, Fragment } from "react";
import Gallery from "react-grid-gallery";
import { Fade } from "react-awesome-reveal";
import image1 from "../../assets/images/galeries/IMG_0182.jpg";
import image2 from "../../assets/images/galeries/IMG_0461.jpg";
import image3 from "../../assets/images/galeries/IMG_3178.JPG";

const images = [
  {
    src: image1,
    thumbnail: image1,
    thumbnailWidth: 320,
    thumbnailHeight: 412
  },
  {
    src: image2,
    thumbnail: image2,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: image3,
    thumbnail: image3,
    thumbnailWidth: 320,
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
              <div className="col-8 text-center">
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
