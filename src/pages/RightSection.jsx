import About from "../Components/componentsRight/About"
import AllContent from "../Components/componentsRight/AllContent"
import Footer from "../Components/componentsRight/Footer"

function RightSection() {
  return (
    <div className="grid gap-y-8 px-5">
      <About />
      <AllContent/>
      <Footer/>
    </div>
  )
}

export default RightSection