import { Routes, Route } from 'react-router-dom'
import ChooseTopic from './choosetopic'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/choosetopic" element={<ChooseTopic />} />
    </Routes>
  )
}
