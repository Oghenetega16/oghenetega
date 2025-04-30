import Card from "./components/card"
import { Link } from 'react-router-dom'

export default function Project() {
    return (
        <>
            <div className="mb-16 scroll-mt-16 md:mb-14 lg:scroll-mt-24" id="projects">
                <h2 className="text-sm mb-5 text-white lg:hidden">PROJECTS</h2>
                <div className="space-y-18">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="group cursor-pointer"><Link to='/allprojects' className="mt-12 text-white group-hover:text-emerald-300">View Full Project Archive <i className="fa-solid fa-arrow-right text-xs group-hover:text-sm"></i></Link></div>
        </>
    )
}