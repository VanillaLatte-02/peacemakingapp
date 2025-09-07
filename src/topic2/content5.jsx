
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import topic2texts from '../texts/topic2texts'
import './topic2.css'
import images from '../images';


export default function Topic2Content5() {
  const lang = localStorage.getItem('lang') || 'en'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/topic2/content6'),
    onSwipedRight: () => navigate('/topic2/content4'),
    trackMouse: true
  });
  return (
    <div className="topic2-container">
      <div className="topic2-header">
        <div className="topic2-title-group">
          <Link to="/choosetopic" className="topic2-arrow-btn-top-left">
            <MdChevronLeft />
          </Link>
          <div className="topic2-title">{topic2texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="topic2-arrows desktop-only">
          <Link to="/topic2/content1" className="topic2-arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/topic2/content4" className="topic2-arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/topic2/content6" className="topic2-arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/topic2/content12" className="topic2-arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="topic2-body" {...handlers}>
        <div className="scroll-img-container">
          <img
            src={images[lang].slide11}
            alt="Slide11 Image"
            className="topic2-img"
            draggable={false}
          />
        </div>
      </div>
      {/* Page Indicator di bawah gambar */}
      {(() => {
        const activePage = 5;
        return (
          <div className="page-indicator">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <span
                key={num}
                className={`dot${num === activePage ? ' active' : ''}`}
              />
            ))}
          </div>
        );
      })()}

      {/* Navigation Arrows for mobile interfacew */}
      <div className="topic2-arrows-bottom mobile-only">
        <Link to="/topic2/content1" className="topic2-arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/topic2/content4" className="topic2-arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/topic2/content6" className="topic2-arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/topic2/content12" className="topic2-arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}