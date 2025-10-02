import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Anime from "../../assets/WaguriBeach.jpg";

const navs = [
  { title: "About Me", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Article", sectionId: "Article-section" },
];

function About() {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    console.log("Scrolling to:", sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      {/* เมนู */}
      <div className="hidden lg:flex flex-col font-semibold py-2">
        {navs.map((e, i) => (
          <div
            key={`${e.sectionId}-${i}`}
            onClick={() => handleClick(e.sectionId)}
            onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
            onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
            className="cursor-pointer flex items-center py-3"
          >
            <FontAwesomeIcon
              className={`mr-2 text-primaryTitle arrow ${isMouseEnter[e.title] ? "" : "hidden"
                }`}
              icon={faArrowRight}
            />
            <div
              className={`${isMouseEnter[e.title] ? "translate-x-1" : ""
                } duration-500 ease-out`}
            >
              {e.title}
            </div>
          </div>
        ))}
      </div>

      {/* Banner Gif */}
      <div className="flex justify-start pt-2 pb-2">
        <img src={Anime} alt="Anime Banner" className="min-h-2 rounded-lg border-2 border-primaryTitle" width={325} />
      </div>
    </div>
  );
}

export default About;
