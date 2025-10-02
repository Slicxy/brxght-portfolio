import {
  faDiscord,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // ต้อง import ด้วย
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Portfolio from "../../assets/PortfolioV1.png";

function ExperienceOne() {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <div
      className={`grid grid-cols-[25%_75%] px-2 py-3 rounded-lg duration-500 ${isMouseEnter ? "bg-bg" : ""
        }`}
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      <div className="space-y-2">
        {/* Years Experience */}
        <div
          className={`duration-500 ${isMouseEnter ? "text-primaryContent" : ""
            }`}
        >
          <span className="text-sm">2025</span>
        </div>

        {/* Image Experience */}
        <div>
          <img src={Portfolio} className="w-4/6 rounded-md border-2 border-primaryTitle"/>
        </div>
      </div>

      {/* Name Experience */}
      <div className="flex flex-col gap-5">
        <div
          className={`text-primaryBase ${isMouseEnter ? "text-primaryContent" : ""
            } duration-500`}
        >
          Resume Website Version.1
          <FontAwesomeIcon
            className={`text-xs pl-1 -rotate-45 duration-500 ease-in ${isMouseEnter ? "translate-x-1 -translate-y-1" : ""
              }`}
            icon={faArrowRight}
          />
        </div>

        {/* Contact */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://discord.gg/aShMZbjb"
            target="_blank"
            className="hover:text-2xl duration-500"
          >
            <FontAwesomeIcon
              className={`${isMouseEnter ? "text-primaryContent" : ""}`}
              icon={faDiscord}
            />
          </a>
          <a
            href="https://discord.gg/aShMZbjb"
            target="_blank"
            className="hover:text-2xl duration-500"
          >
            <FontAwesomeIcon
              className={`${isMouseEnter ? "text-primaryContent" : ""}`}
              icon={faGithub}
            />
          </a>
          <a
            href="https://discord.gg/aShMZbjb"
            target="_blank"
            className="hover:text-2xl duration-500"
          >
            <FontAwesomeIcon
              className={`${isMouseEnter ? "text-primaryContent" : ""}`}
              icon={faYoutube}
            />
          </a>
        </div>

        {/* Description */}
        <div className="text-sm">
          A modern and responsive resume website built with React and TailwindCSS, designed to showcase my skills, experiences.
        </div>

        {/* Category */}
        <div className="flex gap-4 text-sm">
          <div
            className={`bg-primaryBase px-2 py-1 rounded-md text-primaryBg ${isMouseEnter ? "bg-primaryContent" : ""
              } hover:text-base duration-500`}
          >
            React
          </div>
          <div
            className={`bg-primaryBase px-2 py-1 rounded-md text-primaryBg ${isMouseEnter ? "bg-primaryContent" : ""
              } hover:text-base duration-500`}
          >
            Tailwinds
          </div>
          <div
            className={`bg-primaryBase px-2 py-1 rounded-md text-primaryBg ${isMouseEnter ? "bg-primaryContent" : ""
              } hover:text-base duration-500`}
          >
            FontAweSome
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceOne;
