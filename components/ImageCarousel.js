import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handleOnChange = (index) => {
    setTransitioning(true);
    setActiveIndex(index + 1);
  };

  const handleOnTransitionEnd = () => {
    setTransitioning(false);
  };
  const customPrevBtn = (onClickHandler, hasPrev, label) => (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="arrow_left"
      onClick={onClickHandler}
    />
  );
  const customNextBtn = (onClickHandler, hasNext, label) => (
    <FontAwesomeIcon
      icon={faChevronRight}
      className="arrow_right"
      onClick={onClickHandler}
      title={label}
    />
  );
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      onChange={handleOnChange}
      onTransitionEnd={handleOnTransitionEnd}
      stopOnHover={false}
      cssClass="default-carouel"
      renderArrowNext={customNextBtn}
      renderArrowPrev={customPrevBtn}
      prevLabel="Previous"
      nextLabel="Next"
    >
      <div>
        <img
          src="/img/background-1.jpg"
          alt="Image1"
          className={activeIndex === 0 && !transitioning ? "img-carousel" : ""}
        />
      </div>
      <div>
        <img
          src="/img/background-2.jpg"
          alt="Image2"
          className={activeIndex === 1 && !transitioning ? "img-carousel" : ""}
        />
      </div>
      <div>
        <img
          src="/img/background-3.jpg"
          alt="Image3"
          className={activeIndex === 2 && !transitioning ? "img-carousel" : ""}
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
