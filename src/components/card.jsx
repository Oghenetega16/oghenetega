import Skill from "./skills"

export default function Card() {
    return (
        <div className="group">
            <div className="lg:p-6 flex flex-col-reverse md:flex md:flex-row gap-8 lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hoverdrop-shadow-lg rounded-md transition motion-reduce:transition-none">
                <div className="w-60 h-30 md:w-150 md:h-24"><img className="w-full h-full" src="./images/desktop-design.jpg" alt="" /></div>
                <div className="">
                    <h1 className="text-lg text-white lg:group-hover:text-[#4BD3D0]">Browser extension manager UI <i className="fa-solid fa-arrow-up text-xs transform rotate-45 group-hover:text-sm"></i></h1>
                    <p className="text-sm mt-3 text-gray-500">This project will be a fun way to practice working with dynamic data, filtering
                    data, color theming, building a responsive grid, and more!
                    This project will be a fun way to practice working with dynamic data, filtering
                    data, color theming, building a responsive grid, and more!</p>
                    <div className="text-xs flex my-5 items-center flex-wrap gap-2 text-white">
                        <Skill skill='JavaScript' />
                        <Skill skill='HTML5' />
                        <Skill skill='CSS3' />
                    </div>
                </div>
            </div>
        </div> 
    )
}