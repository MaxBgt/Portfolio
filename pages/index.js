import DynamicText from "@/components/DynamicText";
import ImageCarousel from "@/components/ImageCarousel";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const index = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="home_container"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.2 }}
      >
        <ImageCarousel />
        <DynamicText />
      </motion.div>
    </AnimatePresence>
  );
};

export default index;
