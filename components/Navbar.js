import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="navbar"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.35 }}
      >
        <ul className="nav-elements">
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
