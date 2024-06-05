import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/animated";
import "./contact.scss";
import Loader from "react-loaders";

const Contact = () => {
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
              strArray={[
                "L",
                "e",
                "t'",
                "s",
                " ",
                "c",
                "o",
                "n",
                "n",
                "e",
                "c",
                "t",
                "!",
              ]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam
            sapien, euismod vehicula est ac, hendrerit aliquam lorem. Nunc
            tincidunt risus ac luctus pharetra. Nullam mi dolor, blandit eget
            urna posuere, imperdiet convallis ipsum. Donec tristique ex sed
            magna sodales commodo. Donec nec molestie eros. Nullam egestas
            lobortis elit, et faucibus ligula venenatis et. Fusce cursus sem in
            maximus feugiat. Cras quis faucibus libero. Praesent odio mi, tempus
            vel urna id, lobortis condimentum felis. Pellentesque rutrum lacinia
            nisi at pretium. Morbi et mauris eu odio scelerisque pulvinar eget
            sit amet purus. Sed ac malesuada sapien. Nam feugiat ornare cursus.
          </p>
          <p>
            Integer eu auctor nunc. Mauris hendrerit pharetra tortor convallis
            euismod. Integer volutpat erat sed sapien bibendum viverra. Nunc
            imperdiet ante turpis, eu ultrices turpis luctus a. Duis luctus arcu
            velit, eu faucibus eros scelerisque vitae. Aliquam erat volutpat.
            Sed ac laoreet justo, at cursus erat.
          </p>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Contact;
