import Card from "@/components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    axios
      .get("/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des projets:", error)
      );
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>Mes projets | Portfolio | Maxime Bignolet | Développeur</title>
        <meta
          name="description"
          content="Découvrez les projets sur lesquels j'ai travaillé en tant que développeur web. Vous trouverez des exemples de sites web, d'applications et d'autres réalisations que j'ai créées ou auxquelles j'ai contribué."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://maxime-bignolet-portfolio.com/portfolio"
        />
      </Head>
      <AnimatePresence>
        <motion.div
          className="portfolio"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="header_portfolio">
            <h2 className="title_portfolio">MES PROJETS</h2>
            <h3 className="subtitle_portfolio">
              Voici les projets sur lesquels j'ai travaillé
            </h3>
          </div>
          <div className="card_container">
            <Slider
              infinite={true}
              lazyLoad={true}
              speed={300}
              slidesToShow={3}
              centerMode={true}
              centerPadding={0}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
              beforeChange={(current, next) => setImageIndex(next)}
            >
              {projects.map((project, idx) => (
                <div
                  className={idx === imageIndex ? "slide activeSlide" : "slide"}
                  key={idx}
                >
                  <Card key={project.id} project={project} />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default portfolio;
