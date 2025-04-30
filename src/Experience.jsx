import Skill from "./components/skills"

export default function Experience() {
    return (
        <>
            <div className="mb-16 scroll-mt-16 lg:scroll-mt-24 group" id="experience">
                <h2 className="text-sm mb-5 text-white lg:hidden">EXPERIENCE</h2>
                <div className="lg:p-6 md:flex gap-20 lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hoverdrop-shadow-lg rounded-md transition motion-reduce:transition-none">
                    <span className="text-xs text-gray-400 w-29">2024 — PRESENT</span>
                    <div className="md:w-112">
                        <p className="mb-2 text-white font-bold text-xl lg:group-hover:text-emerald-300">Freelance Frontend Developer — Remote <i className="fa-solid fa-arrow-up text-xs transform rotate-45 group-hover:text-sm"></i></p>
                        <p className="text-sm text-gray-100">Delivered 10+ responsive web projects for personal, freelance, and 
                        educational purposes, focusing on UX, accessibility, and performance.
                        Collaborated with UI/UX designers in Figma and developers via Git/GitHub 
                        in Agile teams to ship functional, mobile-first products. Improved page 
                        load speed by 30% through image optimization, lazy loading, and modular 
                        JavaScript techniques. Developed and maintained unit tests using React 
                        Testing Library, ensuring UI stability across updates. Deployed projects 
                        with modern CI/CD workflows on Netlify and Vercel, gaining real-world experience 
                        in continuous integration and delivery.</p>
                        <div className="text-xs flex my-5 items-center flex-wrap gap-2 text-white">
                            <Skill skill='JavaScript' />
                            <Skill skill='HTML5' />
                            <Skill skill='CSS3' />
                            <Skill skill='React' />
                            <Skill skill='Tailwind CSS' />
                            <Skill skill='API Integration' />
                        </div>
                    </div>
                </div>
            </div>
            <a className="group" href="./resume.docx"><p className="md:mb-24 mb-16 text-white group-hover:text-emerald-300">View Full Resume <i className="fa-solid fa-arrow-up text-xs transform rotate-45 group-hover:text-sm"></i></p></a>
        </>
    )
}