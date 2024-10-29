import { ReactElement } from "react";
// import Slide from "react-reveal/Slide";
// @ts-ignore
import Zoom from "react-reveal/Zoom";
import Template1 from "./portfolio/templates/template1/Template1";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import MoviesList from "./MoviesList";

// interface NavbarProps {
//   onClick: (action: string) => void;
// }
// interface TypewriterConfig {
//   words: string[];
//   loop?: {};
// }

export default function Home(): ReactElement {
  const [headingText] = useTypewriter({
    words: ["Awesome", "Customized", "Beautiful"],
    loop: Infinity,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="h-screen pt-[4.5rem] min-h-[100vh]">
      <div className="bg-[#1F0F53] ">
        <div>
          {/* <div className=" h-full text-white text-center">
            <span className="text-[6rem]">
              Make an
              <span
                className=" text-transparent ml-5"
                style={{
                  background:
                    "linear-gradient(45deg, red, orange, yellow, green, pink, purple)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {headingText}
              </span>
              <br /> Portfolio website
            </span>
          </div>
          <div className="w-[100%] flex align-middle justify-center">
            <button className="bg-[#DD6275] rounded-lg p-3 w-48 font-bold hover:bg-[#f48091] text-white">
              Get Started
            </button>
          </div> */}
          <div>
            <MoviesList></MoviesList>
          </div>
        </div>
      </div>
    </div>
  );
}
