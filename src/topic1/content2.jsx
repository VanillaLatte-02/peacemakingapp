import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import topic1texts from '../texts/topic1texts'
import '../topic1/topic1.css'

export default function Content2() {
  const [lang] = useState('id')

  return (
    <div className="topic1-container">
      {/* Baris Atas */}
      <div className="topic1-header">
            <div className="topic1-title-group">
              <Link to="/choosetopic" className="arrow-btn" title="Kembali ke Pilihan Topik">
                <FaArrowLeft />
              </Link>
              <div className="topic1-title">{topic1texts[lang].titlecontent2}</div>
            </div>
        <div className="topic1-arrows">
           <Link to="/topic1/content1" className="arrow-btn" title="Ke konten sebelumnya">
            <FaArrowLeft />
          </Link>
          <Link to="/topic1/content3" className="arrow-btn" title="Ke konten berikutnya">
            <FaArrowRight />
          </Link>
        </div>
      </div>
      {/* Baris Bawah */}
      <div className="topic1-body">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Contoh"
          className="topic1-img"
        />
      </div>
      {/* Page Indicator, manually set because static data */}
        <div className="page-indicator">
        {[1, 2, 3].map((num) => (
            <span
            key={num}
            className={`dot${num === 2 ? ' active' : ''}`} 
            />
        ))}
    </div>
     {/* Navigation Arrows for mobile interfacew */}
      <div className="topic1-arrows-bottom mobile-only">
        <Link to="" className="arrow-btn" title="Ke konten sebelumnya">
          <FaArrowLeft />
        </Link>
        <Link to="/topic1/content2" className="arrow-btn" title="Ke konten berikutnya">
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}