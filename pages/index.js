import React from "react";
import DynamicText from "@/components/DynamicText";
import ImageCarousel from "@/components/ImageCarousel";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Accueil | Portfolio | Maxime Bignolet | Développeur</title>
        <meta
          name="description"
          content="Bienvenue sur le portfolio de Maxime Bignolet, un développeur spécialisé dansReact, Next.js et autres technologies web modernes. Découvrez mes projets, compétences et expériences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://maxime-bignolet-portfolio.com/" />
      </Head>
      <AnimatePresence>
        <motion.div
          className="home_container"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ImageCarousel />
          <DynamicText />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default index;
