
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import topic1texts from '../texts/topic1texts'
import './topic1.css'
import images from '../images';


export default function Topic1Content1() {
  const lang = localStorage.getItem('lang') || 'id'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/topic1/content2'),
    onSwipedRight: () => { }, // isi jika ingin swipe kanan
    trackMouse: true
  });
  return (
    <div className="topic1-container">
      <div className="topic1-header">
        <div className="topic1-title-group">
          <Link to="/choosetopic" className="arrow-btn-top-left">
            <MdChevronLeft />
          </Link>
          <div className="topic1-title">{topic1texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="topic1-arrows desktop-only">
          <Link to="/choosetopic" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/choosetopic" className="arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/topic1/content2" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/topic1/content2" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="topic1-body" {...handlers}>
        <div className="scroll-img-container">
          <img
            src={images[lang].slide4}
            alt="Slide4 Image"
            className="topic1-img"
            draggable={false}
          />
        </div>
      </div>
      {/* Page Indicator di bawah gambar */}
      {(() => {
        const activePage = 1;
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
        <Link to="/choosetopic" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/choosetopic" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/topic1/content2" className="arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/topic1/content2" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}