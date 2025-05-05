import Skill from "./skills"
import data from "../data.json"

export default function Card() {
    return (
        <>
        {data.slice(0, 4).map((item, index) => (
        <div className="group" key={index}>
            <div className="lg:p-6 flex flex-col-reverse md:flex md:flex-row gap-8 lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hoverdrop-shadow-lg rounded-md transition motion-reduce:transition-none">
                <div className="w-60 h-30 md:w-300 md:h-24 overflow-hidden"><img className="w-full h-full object-cover" src={item.image} alt="" /></div>
                <div className="">
                    <h1 className="text-white lg:group-hover:text-[#4BD3D0]">{item.title} <i className="fa-solid fa-arrow-up text-xs transform rotate-45 group-hover:text-sm"></i></h1>
                    <p className="text-sm mt-3 text-gray-500">{item.desc}</p>
                    <div className="text-xs flex my-5 items-center flex-wrap gap-2 text-white">
                        {item.skills.map((skill, i) => (
                            <Skill skill={skill} key={i}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        ))}
        </>
    )
}