import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";
import "../css/styles.css";
import AnimText from "./AnimText";
import React from "../icons/React";
import NodeJS from "../icons/NodeJS";
import TypeScript from '../icons/TypeScript'
import HTML from "../icons/HTML";
import MongoDB from "../icons/MongoDB";
import NextJS from "../icons/NextJS";
import Redux from '../icons/Redux'
import CSS from '../icons/CSS'
import JS from '../icons/JS'
import AWS from "../icons/AWS";
import Bootstrap from "../icons/Bootstrap";
import Express from "../icons/Express";
import chatyou from "../images/chatyou.io.png";
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
      <motion.div
        initial={{ opacity: 0.3, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="position-relative"
        ref={ref}
      >
        <div className="bg p-5 rounded-3 font-archivo text-white text-center ">
          <AnimText />
        </div>
        <div className="d-flex mt-5 justify-content-center">
          <a
            href="#skills"
            className="border-0 text-decoration-none text-white bg col-3 py-2 mx-1 rounded-2 text-center"
          >
            My Skills
          </a>
          <button
            style={{ height: "" }}
            className="border-0 col-3 text-white btn btn-dark mx-1 rounded-2 text-center"
          >
            Portfolio
          </button>
        </div>
      </motion.div>
      <motion.h2
        className="text-dark ms-5"
        style={{ y }}
      >{`#Welcome`}</motion.h2>
    </section>
  ) : id == 2 ? (
    <section id="skills" className="d-flex flex-column">
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
        <div
          className="bg-light row-cols-1 rounded-5 d-flex flex-column flex-wrap justify-content-center p-5 align-items-center"
        >
          <div className="d-flex">
            <div style={{ height: "75px", width: "75px" }}>
              <React />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <NodeJS />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <Bootstrap />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <NextJS />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <AWS />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <Express />
            </div>
          </div>
          <div className="d-flex mt-3">
           
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <MongoDB />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <TypeScript />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <Redux />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <CSS />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <JS />
            </div>
            <div className="ms-1" style={{ height: "75px", width: "75px" }}>
              <HTML />
            </div>
          </div>
        </div>
          <motion.h2
            className="text-dark"
            style={{ y }}
          >{`#My Skills`}</motion.h2>
      </UseInView>
    </section>
  ) : id == 3 ? (
    <section className="d-flex flex-column">
      <h3 className="fs-1">Portfolio</h3>
      <div className="col-6 d-flex justify-content-between">
        <div>
          <img
            className="img-fluid col-10
          "
            src={chatyou}
          ></img>
        </div>
        <div className="col-4">
          <h4> https://chatyou.io</h4>A Full Stack WebSocket chatting
          application made with React, TypeScript, Bootstrap, React Router,
          Redux Toolkit, Express, Socket.io, Mongoose, MongoDB and hosted using
          an ubuntu EC2 instance on AWS
        </div>
      </div>
      <motion.h2
        className="text-dark ms-5"
        style={{ y }}
      >{`#Projects`}</motion.h2>
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
