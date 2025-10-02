import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from '../../assets/Resume.pdf';
import IntroList from '../../contents/IntroList';
function Introduction() {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-3xl text-primaryTitle font-semibold">
        {IntroList.name}
      </div>
      <div className="text-primaryContent text-lg font-semibold">
        {IntroList.title}
      </div>
      <div className="text-sm w-5/6">
        {IntroList.caption}
        </div>
      <div className="mt-3">
        <a href={Resume} target="_blank">
          <span className="rounded-md bg-primaryTitle text-white py-2 px-4">
            {IntroList.btnText}
            <span className="rotate-90 inline-block ml-2 text-sm">
              <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Introduction;
