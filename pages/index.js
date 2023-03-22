import ImageCarousel from "@/components/ImageCarousel";
import React from "react";

const index = () => {
  return (
    <div className="home_container">
      <ImageCarousel />
      <div className="header">
        <div className="title">
          <h2 className="name">Maxime Bignolet</h2>
          <h1 className="job">Développeur web</h1>
        </div>
      </div>
    </div>
  );
};

export default index;
