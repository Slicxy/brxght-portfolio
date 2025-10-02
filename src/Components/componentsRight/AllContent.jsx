import ExperienceOne from "./ExperienceOne";

function AllContent() {

  return (
    // Experience
    <div className="space-y-10">
      <div>
        <div className="text-primaryContent text-lg scroll-m-14" id="Experience-section">Experience</div>
        <div className="space-y-3">
          <ExperienceOne />
          <ExperienceOne />
          <ExperienceOne />
        </div>
      </div>
      {/* Project */}
      <div>
        <div className="text-primaryContent text-lg scroll-m-14" id="Project-section">Project</div>
        <div className="space-y-3">
        <ExperienceOne />
        <ExperienceOne />
        <ExperienceOne />
        </div>
      </div>
      {/* Article */}
      <div>
        <div className="text-primaryContent text-lg scroll-m-14" id="Article-section">Article</div>
        <div className="space-y-3">
        <ExperienceOne />
        <ExperienceOne />
        <ExperienceOne />
        </div>
      </div>
    </div>
  );
}

export default AllContent;
