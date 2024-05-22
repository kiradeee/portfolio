import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/animated";
import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["A", "b", "o", "u", "t", "", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            As a full-stack software developer, I bring a unique blend of
            creativity, problem-solving skills, and a passion for technology.
            With less than a year of professional experience, I’ve already made
            significant contributions to various projects. My journey began when
            I decided to pivot from a different career path, embracing the
            challenge of coding and development.
          </p>
          <p>
            In my previous work, I leverage cutting-edge technologies to build
            robust and user-friendly applications. On the frontend, I’m
            proficient in React, crafting intuitive interfaces that captivate
            users. Meanwhile, on the backend, I rely on Nest JS to create
            scalable and efficient APIs. My commitment to continuous learning
            drives me to stay up-to-date with industry trends, ensuring that I
            deliver high-quality solutions.
          </p>
          <p>
            Whether it’s solving complex algorithms or collaborating with
            cross-functional teams, I thrive on the excitement of building
            something meaningful. Join me on this journey as we transform ideas
            into reality, one line of code at a time.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#24292e" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default About;
