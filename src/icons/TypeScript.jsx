import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export default function App() {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        viewBox="0 0 19 19"
      >
        <motion.path
          d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3h-1A1.5 1.5 0 018.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5V.5z"
          fill="transparent"
          strokeWidth="0.3"
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
