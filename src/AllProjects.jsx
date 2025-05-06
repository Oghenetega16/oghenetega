import { Link } from 'react-router-dom'
import Skill from './components/skills'
import data from './data.json'

export default function Projects() {
    return (
        <div className="mx-auto my-12 min-h-screen max-w-screen-xl px-6 md:px-12 lg:py-0">
            <div className="group mb-2">
                <Link to='/' className="inline-flex items-center font-semibold leading-tight text-[#4BD3D0] cursor-pointer">
                    <i className="mr-1 fa-solid fa-arrow-left text-xs group-hover:-ml-2"></i>
                    <p className='group-hover:ml-2'>Oghenetega Sukuru</p>
                </Link>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
            <table className="mt-12 w-full border-collapse text-left">
                <thead className="sticky top-0 z-10 border-b border-slate-300 bg-slate-900 text-slate-200 px-6 py-5 backdrop-blur">
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold">Year</th>
                        <th className="py-4 pr-8 text-sm font-semibold">Project</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">Built with</th>
                        <th className="hidden md:block py-4 pr-8 text-sm font-semibold lg:table-cell">Link</th>
                    </tr>
                </thead>

                {data.map((item, index) => (
                    <tbody className='border-b border-slate-300 bg-slate-900 backdrop-blur' key={index}>
                        <tr className="border-b border-slate-300 last:border-none text-slate-200">
                            <td className="py-4 pr-4 align-top text-sm"><div className="translate-y-px font-light text-slate-500">{item.year}</div></td>
                            <td className="py-4 pr-4 align-top font-semibold leading-snug flex group">
                                <a className='group-hover:text-[#4BD3D0]' href={item.link}>{item.title}</a>
                                <div className='md:hidden'><i className="fa-solid fa-arrow-up ml-2 text-xs transform rotate-45 group-hover:text-sm group-hover:text-[#4BD3D0]"></i></div>
                            </td>
                            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                <div className='inline-flex flex-wrap space-x-2 space-y-2 text-black font-light'>
                                    {item.skills.map ((skill, i) => (
                                        <Skill skill={skill}  key={i} />
                                    ))}
                                </div>
                            </td>
                            <td className="hidden py-4 pr-4 align-top sm:table-cell text-sm group">
                                <a className='group-hover:text-[#4BD3D0]' href={item.link}>{item['link-tag']}</a>
                                <i className="fa-solid fa-arrow-up ml-2 text-xs transform rotate-45 group-hover:text-sm group-hover:text-[#4BD3D0]"></i>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}