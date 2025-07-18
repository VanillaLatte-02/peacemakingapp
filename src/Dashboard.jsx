import { useState } from 'react'
import { FaRegSmile } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import maintexts from './texts/maintexts'
import languageOptions from './texts/language'
import './dashboard.css'
const dropdownStyleClass = "dashboard-language-dropdown"

export default function Dashboard() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'id');

  const handleLangChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem('lang', e.target.value);
  };

  const appname = maintexts[lang].appname
  const mainbutton = maintexts[lang].mainbutton

  return (
    <div className="dashboard-container">
      {/* Baris 1 */}
      <div className="dashboard-header" style={{ position: 'relative' }}>
        <FaRegSmile size={48} color="#333" />
        <h2>{appname}</h2>
        {/* Dropdown Language */}
        <select
          className={dropdownStyleClass}
          value={lang}
          onChange={handleLangChange}
        >
          {Object.keys(languageOptions).map(code => (
            <option key={code} value={code}>
              {languageOptions[code]}
            </option>
          ))}
        </select>
      </div>
      {/* Baris 2 */}
      <div className="dashboard-actions">
        <Link to="/choosetopic" className="dashboard-btn dashboard-btn-full">
          {mainbutton}
        </Link>
      </div>
    </div>
  )
}