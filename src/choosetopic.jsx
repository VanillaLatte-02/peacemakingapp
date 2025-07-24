import { FaRegAddressBook, FaRegSmile } from 'react-icons/fa'
import { IoChevronBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import choosetopictexts from './texts/choosetopictexts'
import './choosetopic.css'
import language from './texts/language';  

// images lain
import logo from './images/logoWhite.png';
import mainBackground from './images/mainBackground.png';

function ChooseTopic() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'id');
  return (
    <div className="choose-topic-container">
      {/* Kolom Kiri */}
      <div className="choose-topic-left"
        style={{
          backgroundImage: `url(${mainBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Link to="/" className="arrow-btn-choose-topic">
          <IoChevronBack size={52} />
        </Link>
        <img
          src={logo}
          alt="Peacemaking App Logo"
          className="choose-logo">
        </img>
        <h2>{choosetopictexts[lang].title}</h2>
      </div>
      {/* Kolom Kanan */}
      <div className="choose-topic-right desktop-only">
        <Link to="/topic1/content1" className="choose-btn">{choosetopictexts[lang].button1}</Link>
        <Link to="/topic2/content1" className="choose-btn">{choosetopictexts[lang].button2}</Link>
        <Link to="/content1_topic3" className="choose-btn">{choosetopictexts[lang].button3}</Link>
        <Link to="/topic4/content1" className="choose-btn">{choosetopictexts[lang].button4}</Link>
      </div>

       <div className="choose-topic-bottom mobile-only">
        <Link to="/topic1/content1" className="choose-btn">{choosetopictexts[lang].button1}</Link>
        <Link to="/topic2/content1" className="choose-btn">{choosetopictexts[lang].button2}</Link>
        <Link to="/content1_topic3" className="choose-btn">{choosetopictexts[lang].button3}</Link>
        <Link to="/topic4/content1" className="choose-btn">{choosetopictexts[lang].button4}</Link>
      </div>
    </div>
  )
}

export default ChooseTopic
