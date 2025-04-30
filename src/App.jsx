import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProjectPage from './Projects'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allprojects" element={<ProjectPage />} />
    </Routes>
  )
}

