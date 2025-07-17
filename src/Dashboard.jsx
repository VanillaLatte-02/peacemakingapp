import { FaRegSmile } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import maintexts from './texts/maintexts'
import './dashboard.css'
import language from './language';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Baris 1 */}
      <div className="dashboard-header">
        <FaRegSmile size={48} color="#333" />
        <h2>{maintexts[language].appname}</h2>
      </div>
      {/* Baris 2 */}
      <div className="dashboard-actions">
        <Link to="/choosetopic" className="dashboard-btn dashboard-btn-full">
          {maintexts[language].mainbutton}
        </Link>
      </div>
    </div>
  )
}
