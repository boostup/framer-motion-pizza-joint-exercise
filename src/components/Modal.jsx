import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: 200, opacity: 1, transition: { delay: 0.5 } },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="Backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="Modal" variants={modal}>
            <p>
              Want to make another pizza ?
              <Link to="/">
                <button>Start Again</button>
              </Link>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
