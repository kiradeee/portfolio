import { Link } from "react-router-dom";
import "./home.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/animated";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const firstNameArray = ["C", "h", "r", "i", "s", "t", "i", "a", "n"];
  const secondNameArray = ["E", "m", "i", "l"];
  const lastNameArray = ["S", "a", "n", "t", "o", "s"];
  const jobString = [
    "W",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  const greeting = ["G", "r", "e", "e", "t", "i", "n", "g", "s"];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="home-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greeting}
              idx={15}
            />
            ! <br /> <span className={`${letterClass} _13`}>I</span>'
            <span className={`${letterClass} _14`}>m</span>{" "}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={firstNameArray}
              idx={15}
            />{" "}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={secondNameArray}
              idx={15}
            />{" "}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastNameArray}
              idx={15}
            />
            , <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobString}
              idx={22}
            />
            .
            <br />
          </h1>
          <h2>
            Experienced Junior Fullstack Developer / Tech Enthusiast / Web3
            Enthusiast
          </h2>
          <Link to="/contact" className="flat-button">
            Contact me
          </Link>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Home;
