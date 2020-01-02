import React, { useState, Fragment } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import image1 from "../../assets/images/articles/articles.jpg";
import image2 from "../../assets/images/articles/image2.jpg";
import image3 from "../../assets/images/articles/image3.jpg";
import "./LatestArticle.css";
import { Fade } from "react-awesome-reveal";

const items = [
  {
    src: image1,
    altText: "Slide 1",
    caption: "Tips and useful information about Raja Ampat & Indonesia"
  },
  {
    src: image2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: image3,
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

const LatestArticle = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Fragment>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-12 text-center">
            <Fade delay={100}>
              <h1>LATEST ARTICLE</h1>
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <Fade delay={300}>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </Fade>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LatestArticle;
