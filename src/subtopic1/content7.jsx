
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import subtopic1texts from '../texts/subtopic1texts'
import './subtopic1.css'
import images from '../images';


export default function Subtopic1Content7() {
  const lang = localStorage.getItem('lang') || 'en'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/subtopic1/content8'),
    onSwipedRight: () => navigate('/subtopic1/content6'),
    trackMouse: true
  });
  return (
    <div className="subtopic1-container">
      <div className="subtopic1-header">
        <div className="subtopic1-title-group">
          <Link to="/choosetopic" className="subtopic1-arrow-btn-top-left">
            <MdChevronLeft />
          </Link>
          <div className="subtopic1-title">{subtopic1texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="subtopic1-arrows desktop-only">
          <Link to="/subtopic1/content1" className="subtopic1-arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/subtopic1/content6" className="subtopic1-arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/subtopic1/content8" className="subtopic1-arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/subtopic1/content10" className="subtopic1-arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="subtopic1-body" {...handlers}>
        <div className="scroll-img-container">
          <img
            src={images[lang].slide28}
            alt="Slide28 Image"
            className="subtopic1-img"
            draggable={false}
          />
        </div>
      </div>
      {/* Page Indicator di bawah gambar */}
      {(() => {
        const activePage = 7;
        return (
          <div className="page-indicator">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <span
                key={num}
                className={`dot${num === activePage ? ' active' : ''}`}
              />
            ))}
          </div>
        );
      })()}

      {/* Navigation Arrows for mobile interfacew */}
      <div className="subtopic1-arrows-bottom mobile-only">
        <Link to="/subtopic1/content1" className="subtopic1-arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/subtopic1/content6" className="subtopic1-arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/subtopic1/content8" className="subtopic1-arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/subtopic1/content10" className="subtopic1-arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}