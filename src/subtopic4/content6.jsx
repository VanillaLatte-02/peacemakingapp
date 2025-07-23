
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import subtopic4texts from '../texts/subtopic4texts'
import './subtopic4.css'
import images from '../images';


export default function Subtopic4Content6() {
  const lang = localStorage.getItem('lang') || 'id'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/subtopic4/content7'),
    onSwipedRight: () => navigate('/subtopic4/content5'),
    trackMouse: true
  });
  return (
    <div className="subtopic4-container">
      <div className="subtopic4-header">
        <div className="subtopic4-title-group">
          <Link to="/choosesubtopic_topic3" className="arrow-btn" style={{
              border: '1px solid #fff',
              background: 'rgba(255,255,255,0.3)'
            }}>
            <MdChevronLeft />
          </Link>
          <div className="subtopic4-title">{subtopic4texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="subtopic4-arrows desktop-only">
          <Link to="/subtopic4/content1" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/subtopic4/content5" className="arrow-btn" >
            <MdChevronLeft  />
          </Link>
          <Link to="/subtopic4/content7" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/subtopic4/content7" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="subtopic4-body" {...handlers}>
        <img
          src={images[lang].slide48}
          alt="Slide48 Image"
          className="subtopic4-img"
          draggable={false}
        />
        </div>
        {/* Page Indicator di bawah gambar */}
        {(() => {
          const activePage = 6;
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
      <div className="subtopic2-arrows-bottom mobile-only">
        <Link to="/subtopic4/content1" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
        <Link to="/subtopic4/content5" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/subtopic4/content7" className="arrow-btn" >
          <MdChevronRight  />
        </Link>
        <Link to="/subtopic4/content7" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight  />
        </Link>
      </div>
    </div>
  )
}