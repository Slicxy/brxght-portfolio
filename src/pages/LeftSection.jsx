import About from "../Components/componentsLeft/About"
import Contact from "../Components/componentsLeft/Contact"
import Introduction from '../Components/componentsLeft/Introduction'

function LeftSection() {
  return (
    <div className="px-5">
        <div className="sticky top-10 grid gap-y-3 lg:grid-rows-[35%_45%_20%] lg:h-[90vh]">
          <Introduction />
          <About />
          <Contact/>
        </div>
      </div>
  )
}

export default LeftSection