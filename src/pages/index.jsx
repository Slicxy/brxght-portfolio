import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Index() {
  return (
    <div className="mt-10 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection/>
      <RightSection/>
      </div>
  );
}

export default Index;
