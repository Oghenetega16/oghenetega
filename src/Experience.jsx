import Skill from "./components/skills"

export default function Experience() {
    return (
        <>
            <div className="mb-16 scroll-mt-16 lg:scroll-mt-24 space-y-10 group" id="experience">
                <h2 className="text-sm mb-5 text-white lg:hidden">EXPERIENCE</h2>
                <div className="lg:p-6 md:flex gap-20 lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hoverdrop-shadow-lg rounded-md transition motion-reduce:transition-none">
                    <span className="text-xs text-gray-400 w-29">2024 — PRESENT</span>
                    <div className="md:w-112">
                        <p className="mb-2 text-white font-bold text-lg lg:group-hover:text-[#4BD3D0]">Freelance Frontend Developer — Remote <i className="fa-solid fa-arrow-up text-xs transform rotate-45 group-hover:text-sm"></i></p>
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
                <div className="my-10 lg:mt-0 lg:p-6 md:flex gap-20 lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hoverdrop-shadow-lg rounded-md transition motion-reduce:transition-none">
                    <span className="text-xs text-gray-400 w-29">JAN — MAR 2025</span>
                    <div className="md:w-112">
                        <p className="text-white font-bold text-lg lg:group-hover:text-[#4BD3D0]">WeFitHost — Remote <i className="fa-solid fa-arrow-up text-xs transform rotate-45 group-hover:text-sm"></i></p>
                        <span className="text-slate-500 text-xs">Frontend Developer Intern</span>
                        <p className="text-sm text-gray-100 mt-2">At WeFitHost, I engineered performant and accessible user interfaces 
                        using React.js and Tailwind CSS, contributing to the delivery of production-ready web solutions. I transformed 
                        high-fidelity Figma designs into reusable, responsive components and implemented dynamic UI behaviors with React 
                        state management and conditional rendering. I also collaborated in code reviews, improved site performance by 
                        optimizing asset loading and minimizing re-renders, and ensured cross-browser compatibility. My contributions 
                        led to a more consistent user experience across devices and reduced UI bugs by 40%. Additionally, I utilized 
                        Git and GitHub for version control, enabling seamless team collaboration within an agile development cycle.</p>
                        <div className="text-xs flex my-5 items-center flex-wrap gap-2 text-white">
                            <Skill skill='React' />
                            <Skill skill='JavaScript' />
                            <Skill skill='CSS3' />
                            <Skill skill='Tailwind CSS' />
                            <Skill skill='HTML5' />
                        </div>
                    </div>
                </div>
            </div>
            <a className="group" href="./resume.pdf"><p className="md:mb-24 mb-16 text-white group-hover:text-[#4BD3D0]">View Full Résumé  <i className="fa-solid fa-arrow-up text-xs transform rotate-45 group-hover:text-sm"></i></p></a>
        </>
    )
}

// There are a few things to do