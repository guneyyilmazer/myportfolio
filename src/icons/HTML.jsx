
import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export default function App() {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        viewBox="0 0 562 562"
      >
        <motion.path
          d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
          fill="transparent"
          strokeWidth="9"
          stroke="rgb(0, 0, 0)"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
      <motion.div
        className="box"
        initial={{ offsetDistance: "0%", scale: 2.5 }}
        animate={{ offsetDistance: "100%", scale: 1 }}
        transition={transition}
      />
    </div>
  );
}
