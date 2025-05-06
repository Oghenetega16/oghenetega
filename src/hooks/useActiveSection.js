import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds) {
const [activeId, setActiveId] = useState('about')

useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setActiveId(entry.target.id)
        }
        })
    },
    {
        threshold: 0.5,
    }
    )

    sectionIds.forEach((id) => {
    const element = document.getElementById(id)
    if (element) observer.observe(element)
    })

    return () => observer.disconnect()
}, [sectionIds])

return activeId
}
