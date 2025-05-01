import Skill from './components/skills'

export default function Projects() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="group mb-2 inline-flex items-center font-semibold leading-tight text-emerald-500">
                <i className="mr-1 fa-solid fa-arrow-left text-xs"></i>
                <p>Oghenetega Sukuru</p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
            <table className="mt-12 w-full border-collapse text-left">
                <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-300/10 last:border-none">
                        <td className="py-4 pr-4 align-top text-sm"><div className="translate-y-px">2023</div></td>
                        <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200"><div>Emerson Collective</div></td>
                        <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell"><div>Upstatement</div></td>
                        <td className="hidden py-4 pr-4 align-top lg:table-cell"><div className='inline-flex flex-wrap space-x-3'><Skill skill='JavaScript' /><Skill skill='React' /><Skill skill='JavaScript' /><Skill skill='React' /></div></td>
                        <td className="hidden py-4 pr-4 align-top sm:table-cell"><div>oghenetegasukuru.com</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}