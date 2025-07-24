import { FaRegAddressBook, FaRegSmile } from 'react-icons/fa'
import { IoChevronBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import choosesubtopic_topic3 from './texts/choosesubtopic_topic3_texts'
import './choosesubtopic_topic3.css'
import language from './texts/language'; 
 
// images lain
import logo from './images/logoWhite.png';
import mainBackground from './images/mainBackground.png';

function ChooseSubTopic_Topic3() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'id');
  return (
    <div className="choose-subtopic-topic3-container">
      {/* Kolom Kiri */}
      <div className="choose-subtopic-topic3-left"
        style={{
          backgroundImage: `url(${mainBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Link to="/content1_topic3" className="arrow-btn-choose-subtopic-topic3">
          <IoChevronBack size={52} />
        </Link>
        <img
                  src={logo}
                  alt="Peacemaking App Logo"
                  className="choose-subtopic-topic3-logo">
                </img>
        <h2>{choosesubtopic_topic3[lang].title}</h2>
      </div>
      {/* Kolom Kanan */}
      <div className="choose-subtopic-topic3-right desktop-only">
        <Link to="/subtopic1/content1" className="choose-subtopic-topic3-btn">{choosesubtopic_topic3[lang].button1}</Link>
        <Link to="/subtopic2/content1" className="choose-subtopic-topic3-btn">{choosesubtopic_topic3[lang].button2}</Link>
        <Link to="/subtopic3/content1" className="choose-subtopic-topic3-btn">{choosesubtopic_topic3[lang].button3}</Link>
        <Link to="/subtopic4/content1" className="choose-subtopic-topic3-btn">{choosesubtopic_topic3[lang].button4}</Link>
      </div>
      <div className="choose-subtopic-topic3-bottom mobile-only">
        <Link to="/subtopic1/content1" className="choose-subtopic-topic3-btn">{choosesubtopic_topic3[lang].button1}</Link>
        <Link to="/subtopic2/content1" className="choose-subtopic-topic3-btn">{choosesubtopic_topic3[lang].button2}</Link>
        <Link to="/subtopic3/content1" className="choose-subtopic-topic3-btn">{choosesubtopic_topic3[lang].button3}</Link>
        <Link to="/subtopic4/content1" className="choose-subtopic-topic3-btn">{choosesubtopic_topic3[lang].button4}</Link>
      </div>
    </div>
  )
}

export default ChooseSubTopic_Topic3
