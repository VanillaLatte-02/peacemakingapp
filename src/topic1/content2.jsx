
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import topic1texts from '../texts/topic1texts'
import './topic1.css'
import images from '../images';
import { act } from 'react'


export default function Topic1Content2() {
  const lang = localStorage.getItem('lang') || 'en'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => { },
    onSwipedRight: () => navigate('/topic1/content1'),
    trackMouse: true
  });
  return (
    <div className="topic1-container">
      <div className="topic1-header">
        <div className="topic1-title-group">
          <Link to="/choosetopic" className="topic1-arrow-btn-top-left">
            <MdChevronLeft />
          </Link>
          <div className="topic1-title">{topic1texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="topic1-arrows desktop-only">
          <Link to="/topic1/content1" className="topic1-arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/topic1/content1" className="topic1-arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/choosetopic" className="topic1-arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/choosetopic" className="topic1-arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="topic1-body" {...handlers}>
        <div className="scroll-img-container">
          <img
            src={images[lang].slide5}
            alt="Slide5 Image"
            className="topic1-img"
            draggable={false}
          />
        </div>
      </div>
      {/* Page Indicator di bawah gambar */}
      {(() => {
        const activePage = 2;
        return (
          <div className="page-indicator">
            {[1, 2].map((num) => (
              <span
                key={num}
                className={`dot${num === activePage ? ' active' : ''}`}
              />
            ))}
          </div>
        );
      })()}

      {/* Navigation Arrows for mobile interfacew */}
      <div className="topic1-arrows-bottom mobile-only">
        <Link to="/topic1/content1" className="topic1-arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/topic1/content1" className="topic1-arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/choosetopic" className="topic1-arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/choosetopic" className="topic1-arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}