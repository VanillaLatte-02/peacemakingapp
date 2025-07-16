import { FaRegSmile } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import maintexts from './maintexts'
import './dashboard.css'

const lang = 'id'

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Baris 1 */}
      <div className="dashboard-header">
        <FaRegSmile size={48} color="#333" />
        <h2>{maintexts[lang].appname}</h2>
      </div>
      {/* Baris 2 */}
      <div className="dashboard-actions">
        <Link to="/choosetopic" className="dashboard-btn dashboard-btn-full">
          {maintexts[lang].mainbutton}
        </Link>
      </div>
    </div>
  )
}
