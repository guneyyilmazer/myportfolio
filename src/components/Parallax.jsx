import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";
import "../css/styles.css";
import portrait from "../images/portrait.png";
import AnimText from "./AnimText";
import React from "../icons/React";
import NodeJS from "../icons/NodeJS";
import TypeScript from "../icons/TypeScript";
import HTML from "../icons/HTML";
import MongoDB from "../icons/MongoDB";
import NextJS from "../icons/NextJS";
import Redux from "../icons/Redux";
import CSS from "../icons/CSS";
import JS from "../icons/JS";
import AWS from "../icons/AWS";
import Bootstrap from "../icons/Bootstrap";
import Express from "../icons/Express";
import chatyou from "../images/chatyou.io.png";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Slider({ id }) {
  const [skillsIndex, setSkillsIndex] = useState(0);
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
          <div className="" ref={ref}>{isInView && children}</div>
        </span>
      </>
    );
  }
  return id == 1 ? (
    <section className="flex flex-column flex-md-row">
      <div className="me-md-5 portrait ">
        <img className="rounded-circle img-fluid" src={portrait} alt="" />
      </div>
      <motion.div
        initial={{ opacity: 0.3, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="position-relative col-10 col-md-4"
        ref={ref}
      >
        <div className="bg p-5 col-12 rounded-3 font-archivo text-white text-center ">
          <AnimText />
        </div>
        <div className="d-flex mt-5 justify-content-center">
          <a
            href="#skills"
            style={{ fontSize: "20px" }}
            className="border-0 bebas text-decoration-none text-white bg col-3 py-2 mx-1 rounded-2 text-center"
          >
            My Skills
          </a>
          <a
            href="#portfolio"
            style={{ fontSize: "20px" }}
            className="border-0 bebas col-3 text-white bg-black text-decoration-none d-flex justify-content-center align-items-center mx-1 rounded-2 text-center"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/guneyyilmazer"
            target="_new"
            style={{ fontSize: "20px" }}
            className="border-0 bebas col-3 text-white bg-black text-decoration-none d-flex justify-content-center align-items-center mx-1 rounded-2 text-center"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  ) : id == 2 ? (
    <section id="skills" className="d-flex flex-column">
      <UseInView className="position-absolute"></UseInView>

      {skillsIndex == 0 && (
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="start-0 position-absolute text-dark m-5 pb-5"
            style={{ zIndex: 1 }}
          >
            Proven experience working with:
          </motion.h2>
          <UseInView className="">
            <div 
            style={{width:"500px"}}
            className="bg-light position-relative row-cols-1 rounded-5 d-flex flex-column flex-wrap justify-content-center p-5 align-items-center">
              <div>
                <button
                  onClick={() => {
                    setSkillsIndex(1);
                  }}
                  className="position-absolute text-white top-0 end-0 btn btn-d"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="32"
                    viewBox="0 0 500 511"
                  >
                    <path
                      opacity="1"
                      fill="#1E3050"
                      d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"
                    />
                  </svg>
                </button>
              </div>
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
          </UseInView>
        </div>
      )}
      {skillsIndex == 1 && (
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="start-0 position-absolute text-dark m-5 pb-5"
            style={{ zIndex: 1 }}
          >
            Proven experience working with:
          </motion.h2>
          <UseInView>
            <div className="bg-light position-relative row-cols-1 rounded-5 d-flex flex-column flex-wrap justify-content-center p-5 align-items-center">
              <div style={{ fontSize: "20px" }} className="d-flex">
                <ul className="list-inline me-5">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux Toolkit</li>
                  <li>NextJS</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap 5</li>
                </ul>
                <ul className="list-inline me-5">
                  <li>TypeScript</li>
                  <li>WebSockets</li>
                  <li>Socket.IO</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>
                <ul className="list-inline">
                  <li>React Router Dom</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => {
                    setSkillsIndex(0);
                  }}
                  className="position-absolute text-white top-0 end-0 btn btn-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      opacity="1"
                      fill="#1E3050"
                      d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </UseInView>
        </div>
      )}
    </section>
  ) : id == 3 ? (
    <section id="portfolio" className="d-flex flex-column">
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
          <h4>
            {" "}
            <a className="text-decoration-none" href="https://chatyou.io">
              https://ChatYou.io
            </a>
          </h4>
          A Full Stack chatting application made with React,
          TypeScript, Bootstrap, React Router, Redux Toolkit, Express,
          Socket.io, Mongoose, MongoDB and hosted using an ubuntu EC2 instance
          on AWS
        </div>
      </div>
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
