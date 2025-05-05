import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AllProjects from './AllProjects'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allprojects" element={<AllProjects />} />
    </Routes>
  )
}

