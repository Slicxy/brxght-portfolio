import AboutData from "../../contents/About";

function About() {
  return (
    <div className="space-y-3  scroll-m-14" id="About-section">
      <div className="text-primaryContent text-2xl font-semibold">{AboutData.title}</div>
      <div>{AboutData.des}</div>
    </div>
  );
}

export default About;
