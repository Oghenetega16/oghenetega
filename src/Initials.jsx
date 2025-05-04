export default function Initials() {
    return (
        <div className="relative">
            <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-4xl xl:text-5xl text-slate-200">Oghenetega Sukuru</h1>
                <h2 className="text-lg text-slate-200 font-medium tracking-tight sm:text-xl mt-3">Front End Engineer</h2>
                <p className="max-w-xs text-slate-500 mt-4">Creative frontend developer building experiences.</p>
            </div>

            <div className="hidden lg:flex lg:flex-col space-y-5 mt-16 w-max">
                <a href="#about" className="text-xs text-white flex items-center group">
                    <span className="h-px w-8 bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-[#4BD3D0] group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                </a>
                <a href="#experience" className="text-xs text-white flex items-center group">
                    <span className="h-px w-8 bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-[#4BD3D0] group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                </a>
                <a href="#projects" className="text-xs text-white flex items-center group">
                    <span className="h-px w-8 bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-[#4BD3D0] group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                </a>
            </div>

            <div className="mt-8 flex gap-5 text-[#4BD3D0] lg:absolute lg:-bottom-60">
                <i className="fa-brands fa-github text-2xl"></i>
                <i className="fa-brands fa-linkedin text-2xl"></i>
                <i className="fa-regular fa-envelope text-2xl"></i>
                <i className="fa-brands fa-square-x-twitter text-2xl"></i>
            </div>
        </div>
    )
}