
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import subtopic4texts from '../texts/subtopic4texts'
import './subtopic4.css'
import images from '../images';


export default function Subtopic4Content7() {
  const lang = localStorage.getItem('lang') || 'en'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => { },
    onSwipedRight: () => navigate('/subtopic4/content6'),
    trackMouse: true
  });
  return (
    <div className="subtopic4-container">
      <div className="subtopic4-header">
        <div className="subtopic4-title-group">
          <Link to="/choosesubtopic_topic3" className="subtopic4-arrow-btn-top-left">
            <MdChevronLeft />
          </Link>
          <div className="subtopic4-title">{subtopic4texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="subtopic4-arrows desktop-only">
          <Link to="/subtopic4/content1" className="subtopic4-arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/subtopic4/content6" className="subtopic4-arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/choosesubtopic_topic3" className="subtopic4-arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/choosesubtopic_topic3" className="subtopic4-arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="subtopic4-body" {...handlers}>
        <div className="scroll-img-container">
          <img
            src={images[lang].slide49}
            alt="Slide49 Image"
            className="subtopic4-img"
            draggable={false}
          />
        </div>
      </div>
      {/* Page Indicator di bawah gambar */}
      {(() => {
        const activePage = 7;
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
      <div className="subtopic4-arrows-bottom mobile-only">
        <Link to="/subtopic4/content1" className="subtopic4-arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/subtopic4/content6" className="subtopic4-arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/choosesubtopic_topic3" className="subtopic4-arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/choosesubtopic_topic3" className="subtopic4-arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}