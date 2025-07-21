import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import topic1texts from '../texts/topic1texts'
import './topic1.css'

export default function Content2() {
  const [lang] = useState(() => localStorage.getItem('lang') || 'id')
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/topic1/content3'),
    onSwipedRight: () => navigate('/topic1/content1'),
    trackMouse: true
  });
  return (
    <div className="topic1-container">
      <div className="topic1-header">
        <div className="topic1-title-group">
          <Link to="/choosetopic" className="arrow-btn" style={{
              border: '1px solid #fff',
              background: 'rgba(255,255,255,0.3)'
            }}>
            <MdChevronLeft />
          </Link>
          <div className="topic1-title">{topic1texts[lang].titlecontent2}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="topic1-arrows desktop-only">
          <Link to="/topic1/content1" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/topic1/content1" className="arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/topic1/content3" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/topic1/content3" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="topic1-body" {...handlers} style={{ position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* Dummy Icon */}
        <MdChevronRight className="body-title" />
        {/* Dummy Text */}
        <div className="body-text">
          {topic1texts[lang].bodycontent2}
        </div>
        {/* 2 Button Navigasi */}
        <div className="button-group">
          <button onClick={() => navigate('/topic1/content1')} className="body-button">
            {topic1texts[lang].button1content2}
          </button>
          <button onClick={() => navigate('/topic1/content3')} className="body-button">
            {topic1texts[lang].button2content2}
          </button>
        </div>
        {/* Button Info */}
        <button onClick={() => setShowInfo(true)} className="body-button">{topic1texts[lang].buttonInfoContent2}</button>
      </div>
      {/* Overlay Info*/}
      {showInfo && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ fontSize: 22, marginBottom: 24, textAlign: 'center', maxWidth: 320 }}>
            Overlay info
          </div>
          <button onClick={() => setShowInfo(false)} className="body-button">Tutup</button>
        </div>
      )}
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
        <Link to="/topic1/content1" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/topic1/content1" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/topic1/content3" className="arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/topic1/content3" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}