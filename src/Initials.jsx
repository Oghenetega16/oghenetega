import useActiveSection from "./hooks/useActiveSection";

export default function Initials() {
const activeSection = useActiveSection(['about', 'experience', 'projects'])

const isActive = (id) => activeSection === id

const linkClass = (id) =>
    `text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
    isActive(id) ? 'text-[#4BD3D0]' : 'text-slate-500'
    } group-hover:text-slate-200`

return (
    <div className="relative">
    {/* Headings */}
    <h1 className="text-4xl font-bold tracking-tight text-slate-200">Oghenetega Sukuru</h1>
    <h2 className="text-lg text-slate-200 font-medium mt-3">Front End Engineer</h2>
    <p className="max-w-xs text-slate-500 mt-4">Creative frontend developer building experiences.</p>

    {/* Scroll-linked Navigation */}
    <div className="hidden lg:flex lg:flex-col space-y-5 mt-16 w-max">
        {['about', 'experience', 'projects'].map((id) => (
        <a key={id} href={`#${id}`} className="group flex items-center">
            <span className={`h-px w-8 bg-slate-600 mr-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#4BD3D0] ${isActive(id) ? 'w-16 bg-[#4BD3D0]' : ''}`}></span>
            <span className={linkClass(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
        </a>
        ))}
    </div>
    </div>
)
}
