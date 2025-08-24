
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import subtopic3texts from '../texts/subtopic3texts'
import './subtopic3.css'
import images from '../images';


export default function Subtopic3Content1() {
  const lang = localStorage.getItem('lang') || 'id'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/subtopic3/content2'),
    onSwipedRight: () => { },
    trackMouse: true
  });
  return (
    <div className="subtopic3-container">
      <div className="subtopic3-header">
        <div className="subtopic3-title-group">
          <Link to="/choosesubtopic_topic3" className="arrow-btn-top-left">
            <MdChevronLeft />
          </Link>
          <div className="subtopic3-title">{subtopic3texts[lang].titlecontent}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="subtopic3-arrows desktop-only">
          <Link to="/choosesubtopic_topic3" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="/choosesubtopic_topic3" className="arrow-btn" >
            <MdChevronLeft />
          </Link>
          <Link to="/subtopic3/content2" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/subtopic3/content3" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="subtopic3-body" {...handlers}>
        <div className="scroll-img-container">
          <img
            src={images[lang].slide39}
            alt="Slide39 Image"
            className="subtopic3-img"
            draggable={false}
          />
        </div>
      </div>
      {/* Page Indicator di bawah gambar */}
      {(() => {
        const activePage = 1;
        return (
          <div className="page-indicator">
            {[1, 2, 3].map((num) => (
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
        <Link to="/choosesubtopic_topic3" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link to="/choosesubtopic_topic3" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/subtopic3/content2" className="arrow-btn" >
          <MdChevronRight />
        </Link>
        <Link to="/subtopic3/content3" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </div>
  )
}