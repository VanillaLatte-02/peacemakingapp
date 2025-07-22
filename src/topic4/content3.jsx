
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import topic4texts from '../texts/topic4texts'
import './topic4.css'
import images from '../images';


export default function Topic4Content3() {
  const lang = localStorage.getItem('lang') || 'id'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/topic4/content4'),
    onSwipedRight: () => navigate('/topic4/content2'),
    trackMouse: true
  });
  return (
    <div className="topic4-container">
      <div className="topic4-header">
        <div className="topic4-title-group">
          <Link to="/choosetopic" className="arrow-btn" style={{
              border: '1px solid #fff',
              background: 'rgba(255,255,255,0.3)'
            }}>
            <MdChevronLeft />
          </Link>
          <div className="topic4-title">{topic4texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="topic4-arrows desktop-only">
          <Link to="/topic4/content1" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/topic4/content2" className="arrow-btn" >
            <MdChevronLeft  />
          </Link>
          <Link to="/topic4/content4" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/topic4/content7" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="topic4-body" {...handlers}>
        <img
          src={images[lang].slide53}
          alt="Slide53 Image"
          className="topic4-img"
          draggable={false}
        />
        </div>
        {/* Page Indicator di bawah gambar */}
        {(() => {
          const activePage = 3;
          return (
            <div className="page-indicator">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <span
                  key={num}
                  className={`dot${num === activePage ? ' active' : ''}`}
                />
              ))}
            </div>
          );
        })()}

       {/* Navigation Arrows for mobile interfacew */}
      <div className="topic4-arrows-bottom mobile-only">
        <Link to="/topic4/content1" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
        <Link to="/topic4/content2" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/topic4/content4" className="arrow-btn" >
          <MdChevronRight  />
        </Link>
        <Link to="/topic4/content7" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight  />
        </Link>
      </div>
    </div>
  )
}