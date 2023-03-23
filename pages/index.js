import DynamicText from "@/components/DynamicText";
import ImageCarousel from "@/components/ImageCarousel";
import React from "react";

const index = () => {
  return (
    <div className="home_container">
      <ImageCarousel />
      <DynamicText />
    </div>
  );
};

export default index;
