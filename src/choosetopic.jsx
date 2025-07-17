import { FaRegAddressBook, FaRegSmile, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import choosetopictexts from './texts/choosetopictexts'
import './choosetopic.css'
import language from './texts/language';  

function ChooseTopic() {
  const [lang, setLang] = useState('id')
  return (
    <div className="choose-topic-container">
      {/* Kolom Kiri */}
      <div className="choose-topic-left">
        <Link to="/" className="arrow-btn-choose-topic" title="Kembali ke Pilihan Topik">
                    <FaArrowLeft />
        </Link>
        <FaRegAddressBook size={64} color="#333" />
        <h2>{choosetopictexts[lang].title}</h2>
      </div>
      {/* Kolom Kanan */}
      <div className="choose-topic-right">
        <Link to="/topic1/content1" className="dashboard-btn choose-btn">{choosetopictexts[lang].button1}</Link>
        <Link to="/topic1/content1" className="dashboard-btn choose-btn">{choosetopictexts[lang].button2}</Link>
        <Link to="/topic1/content1" className="dashboard-btn choose-btn">{choosetopictexts[lang].button3}</Link>
        <Link to="/topic1/content1" className="dashboard-btn choose-btn">{choosetopictexts[lang].button4}</Link>
      </div>
    </div>
  )
}

export default ChooseTopic
