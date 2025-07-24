
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import topic2texts from './texts/topic3texts'
import './content1_topic3.css'
import images from './images';


export default function Topic3Content1() {
  const lang = localStorage.getItem('lang') || 'id'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/choosesubtopic_topic3'),
    onSwipedRight: () => navigate('/choosetopic'),
    trackMouse: true
  });
  return (
    <div className="content1topic3-container">
      <div className="content1topic3-header">
        <div className="content1topic3-title-group">
          <Link to="/choosetopic" className="arrow-btn-top-left" >
            <MdChevronLeft />
          </Link>
          <div className="content1topic3-title">{topic2texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="topic2-arrows desktop-only">
          <Link to="/choosetopic" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/choosetopic" className="arrow-btn" >
            <MdChevronLeft  />
          </Link>
          <Link to="/choosesubtopic_topic3" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/choosesubtopic_topic3" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="content1topic3-body" {...handlers}>
        <img
          src={images[lang].slide20}
          alt="Slide20 Image"
          className="content1topic3-img"
          draggable={false}
        />
        </div>
        {/* Page Indicator di bawah gambar */}
        {(() => {
          const activePage = 1;
          return (
            <div className="page-indicator">
              {[1].map((num) => (
                <span
                  key={num}
                  className={`dot${num === activePage ? ' active' : ''}`}
                />
              ))}
            </div>
          );
        })()}

       {/* Navigation Arrows for mobile interfacew */}
      <div className="content1topic3-arrows-bottom mobile-only">
        <Link to="/choosetopic" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
        <Link to="/choosetopic" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/choosesubtopic_topic3" className="arrow-btn" >
          <MdChevronRight  />
        </Link>
        <Link to="/choosesubtopic_topic3" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight  />
        </Link>
      </div>
    </div>
  )
}