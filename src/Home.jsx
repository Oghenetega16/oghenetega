import Initials from "./Initials"
import About from "./About"
import Experience from "./Experience"
import Project from "./Project"

export default function Home() {
    return (
        <div className="font-display py-12 px-6 mx-auto md:px-12 md:py-16 lg:flex lg:justify-between">
            <div className="lg:w-fit lg:fixed">
                <Initials />
            </div>
            <div className="lg:w-[52%] lg:ml-auto">
                <About />
                <Experience />
                <Project />
            </div>
        </div>
    )
}

// minor adjustments left to do:
// the scroll thingy