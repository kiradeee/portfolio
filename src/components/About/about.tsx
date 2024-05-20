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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            fusce ut placerat orci nulla pellentesque dignissim enim. Dui sapien
            eget mi proin sed. Tempor nec feugiat nisl pretium fusce id velit ut
            tortor. Eu consequat ac felis donec et. Malesuada fames ac turpis
            egestas integer. Feugiat vivamus at augue eget. Libero id faucibus
            nisl tincidunt. Nulla porttitor massa id neque aliquam vestibulum.
            Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae.
          </p>
          <p>
            Sapien faucibus et molestie ac feugiat sed. Id semper risus in
            hendrerit. Et pharetra pharetra massa massa ultricies. Libero
            volutpat sed cras ornare. Diam in arcu cursus euismod quis viverra
            nibh cras pulvinar. Scelerisque eleifend donec pretium vulputate
            sapien nec sagittis. Aliquam etiam erat velit scelerisque. Suscipit
            tellus mauris a diam maecenas sed. Pellentesque elit eget gravida
            cum. Neque volutpat ac tincidunt vitae. Gravida quis blandit turpis
            cursus in hac habitasse. Est lorem ipsum dolor sit amet consectetur
            adipiscing. Faucibus a pellentesque sit amet porttitor eget. In est
            ante in nibh mauris cursus mattis molestie a.
          </p>
          <p>
            Vitae auctor eu augue ut lectus. Enim praesent elementum facilisis
            leo vel fringilla est. Sed nisi lacus sed viverra tellus. Eros donec
            ac odio tempor orci dapibus. Molestie a iaculis at erat
            pellentesque. Nisl pretium fusce id velit ut tortor pretium. Odio ut
            enim blandit volutpat maecenas volutpat blandit aliquam etiam.
            Sapien pellentesque habitant morbi tristique senectus et netus et.
            Varius quam quisque id diam vel quam elementum pulvinar etiam. Velit
            egestas dui id ornare arcu odio ut. Euismod in pellentesque massa
            placerat. Enim ut tellus elementum sagittis vitae et leo. Vitae
            ultricies leo integer malesuada nunc vel risus commodo viverra. Et
            leo duis ut diam quam nulla porttitor. Ipsum nunc aliquet bibendum
            enim. Molestie at elementum eu facilisis sed odio morbi quis
            commodo. Urna neque viverra justo nec ultrices. Platea dictumst
            vestibulum rhoncus est. Facilisi morbi tempus iaculis urna id
            volutpat lacus laoreet non. Molestie nunc non blandit massa enim nec
            dui nunc.
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
      <Loader type="pacman" />
    </>
  );
};

export default About;
