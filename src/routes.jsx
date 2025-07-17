import { Routes, Route } from 'react-router-dom'
import ChooseTopic from './choosetopic'
import Dashboard from './Dashboard'
import Content1 from './topic1/content1'
import Content2 from './topic1/content2'
import Content3 from './topic1/content3'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/choosetopic" element={<ChooseTopic />} />
      <Route path="/topic1/content1" element={<Content1 />} />
      <Route path="/topic1/content2" element={<Content2 />} />
      <Route path="/topic1/content3" element={<Content3 />} />
    </Routes>
  )
}
