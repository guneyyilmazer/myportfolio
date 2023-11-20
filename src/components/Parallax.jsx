import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";
import '../css/styles.css'
import AnimText from "./AnimText";
import React from "../icons/React";
import NodeJS from "../icons/NodeJS";
import NextJS from "../icons/NextJS";
import AWS from "../icons/AWS";
import Bootstrap from "../icons/Bootstrap";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Slider({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  function UseInView({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    isInView && console.log("in view");
    return (
      <>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          }}
        >
          <div ref={ref}>{isInView && children}</div>
        </span>
      </>
    );
  }
  return id == 1 ? (
    <section>
      <div className="position-relative" ref={ref}>
        <div className="bg p-5 rounded-3 font-archivo text-white text-center ">
          <AnimText />
        </div>
        <div className="d-flex mt-5 justify-content-center">

        <button className="border-0 text-white bg col-3 py-2 mx-1 rounded-2 text-center">
          My Skills
        </button>
        <button style={{height:""}} className="border-0 col-3 text-white btn btn-dark mx-1 rounded-2 text-center">
          Portfolio
        </button>
        </div>
      </div>
      <motion.h2
        className="text-dark ms-5"
        style={{ y }}
      >{`#Welcome`}</motion.h2>
    </section>
  ) : id == 2 ? (
    <section className="d-flex flex-column">
      <UseInView className="position-absolute">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="start-0 text-dark m-5 pb-5"
          style={{ zIndex: 1 }}
        >
          Proven experience working with:
        </motion.h2>
      </UseInView>

      <UseInView>
        <motion.h2 className="text-dark" style={{ y }}>{`My Skills`}</motion.h2>
        <div
          className="bg-light rounded-5 d-flex justify-content-center p-5 align-items-center"
          style={{ height: "25vh" }}
        >
          <div style={{ height: "75px", width: "75px" }}>
            <React></React>
          </div>
          <div className="ms-4" style={{ height: "75px", width: "75px" }}>
            <NodeJS />
          </div>
          <div className="ms-4" style={{ height: "75px", width: "75px" }}>
            <Bootstrap></Bootstrap>
          </div>
          <div className="ms-4" style={{ height: "75px", width: "75px" }}>
            <NextJS></NextJS>
          </div>
          <div className="ms-4" style={{ height: "75px", width: "75px" }}>
            <AWS />
          </div>
        </div>
      </UseInView>
    </section>
  ) : (
    ""
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((id) => {
        return <Slider id={id} />;
      })}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
