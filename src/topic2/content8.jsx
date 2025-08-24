import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import topic2texts from '../texts/topic2texts'
import './topic2.css'
import images from '../images';


export default function Topic2Content8() {
  const lang = localStorage.getItem('lang') || 'id'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/topic2/content9'),
    onSwipedRight: () => navigate('/topic2/content7'),
    trackMouse: true
  });
  return (
    <div className="topic2-container">
      <div className="topic2-header">
        <div className="topic2-title-group">
          <Link to="/choosetopic" className="arrow-btn-top-left">
            <MdChevronLeft />
          </Link>
          <div className="topic2-title">{topic2texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="topic2-arrows desktop-only">
          <Link to="/topic2/content1" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/topic2/content7" className="arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/topic2/content9" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/topic2/content12" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="topic2-body" {...handlers}>
        <div className="scroll-img-container">
          <img
            src={images[lang].slide14}
            alt="Slide14 Image"
            className="topic2-img"
            draggable={false}
          />
          {/* <Link
          to="/topic2/content9"
          className="custom-hitbox"
          style={{
            position: 'absolute',
            top: 170,
            right: 500,
            width: '200px', 
            height: '110px',
            zIndex: 20,
            background: 'rgba(16, 52, 255, 0.4)', // transparan, bisa dihilangkan
            cursor: 'pointer'
          }}
        /> */}
        </div>
      </div>
      {/* Page Indicator di bawah gambar */}
      {(() => {
        const activePage = 8;
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
        <Link to="/topic2/content1" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/topic2/content7" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/topic2/content9" className="arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/topic2/content12" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}