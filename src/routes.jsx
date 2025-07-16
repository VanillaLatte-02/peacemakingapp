import { Routes, Route } from 'react-router-dom'
import ChooseTopic from './choosetopic'
import Dashboard from './Dashboard'
import Content1 from './topic1/content1'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/choosetopic" element={<ChooseTopic />} />
      <Route path="/topic1/content1" element={<Content1 />} />
    </Routes>
  )
}
