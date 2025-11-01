import { useState } from 'react'
import { FaRegSmile } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import maintexts from './texts/maintexts'
import languageOptions from './texts/language'
import './dashboard.css'

// images lain
import imagePaths from './texts/imagePaths'

export default function Dashboard() {
  // State for selected language, default to 'en' (English)
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  
  // Handle language change
  const handleLangChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem('lang', e.target.value);
  };

  // Texts based on selected language
  const appname = maintexts[lang].appname
  const mainbutton = maintexts[lang].mainbutton

  // Keep background static; swap logo per language
  const backgroundImg = imagePaths.defaultBackground
  const logoImg = imagePaths.langs[lang]?.logo || imagePaths.logo

  return (
    <div className="dashboard-container">
      {/* First row */}
      <div className="dashboard-header"  style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
        <img
          src={logoImg}
          alt="Peacemaking App Logo"
          className="dashboard-logo">
        </img>
        {/* <h2>{appname}</h2> */}
        {/* Dropdown Language */}
        <select
          className={"dashboard-language-dropdown"}
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
      {/* Second row */}
      <div className="dashboard-actions">
        <Link to="/choosetopic" className="dashboard-btn dashboard-btn-full">
          {mainbutton}
        </Link>
      </div>
    </div>
  )
}