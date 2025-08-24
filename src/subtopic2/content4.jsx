
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import subtopic2texts from '../texts/subtopic2texts'
import './subtopic2.css'
import images from '../images';


export default function Subtopic2Content4() {
  const lang = localStorage.getItem('lang') || 'id'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/subtopic2/content5'),
    onSwipedRight: () => navigate('/subtopic2/content3'),
    trackMouse: true
  });
  return (
    <div className="subtopic2-container">
      <div className="subtopic2-header">
        <div className="subtopic2-title-group">
          <Link to="/choosesubtopic_topic3" className="arrow-btn-top-left">
            <MdChevronLeft />
          </Link>
          <div className="subtopic2-title">{subtopic2texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="subtopic2-arrows desktop-only">
          <Link to="/subtopic2/content1" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/subtopic2/content3" className="arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/subtopic2/content5" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/subtopic2/content5" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="subtopic2-body" {...handlers}>
        <div className="scroll-img-container">
          <img
            src={images[lang].slide36}
            alt="Slide36 Image"
            className="subtopic2-img"
            draggable={false}
          />
        </div>
      </div>
      {/* Page Indicator di bawah gambar */}
      {(() => {
        const activePage = 4;
        return (
          <div className="page-indicator">
            {[1, 2, 3, 4, 5].map((num) => (
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
        <Link to="/subtopic2/content1" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/subtopic2/content3" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/subtopic2/content5" className="arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/subtopic2/content5" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}