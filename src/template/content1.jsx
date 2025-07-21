
import { MdChevronLeft, MdChevronRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import topic1texts from '../texts/topic1texts'
import './topic1.css'
import images from '../images';


export default function Content1() {
  const lang = localStorage.getItem('lang') || 'id'

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/topic1/content2'),
    onSwipedRight: () => {}, // isi jika ingin swipe kanan
    trackMouse: true
  });
  return (
    <div className="topic1-container">
      <div className="topic1-header">
        <div className="topic1-title-group">
          <Link to="/choosetopic" className="arrow-btn" style={{
              border: '1px solid #fff',
              background: 'rgba(255,255,255,0.3)'
            }}>
            <MdChevronLeft />
          </Link>
          <div className="topic1-title">{topic1texts[lang].titlecontent1}</div>
        </div>
        {/* Arrows di header, hanya tampil di desktop */}
        <div className="topic1-arrows desktop-only">
          <Link to="" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <Link to="" className="arrow-btn" >
            <MdChevronLeft  />
          </Link>
          <Link to="/topic1/content2" className="arrow-btn" >
            <MdChevronRight />
          </Link>
          <Link to="/topic1/content3" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>
      <div className="topic1-body" {...handlers}>
        <img
          src={images[lang].slide4}
          alt="Slide4 Image"
          className="topic1-img"
          draggable={false}
        />
        </div>
        {/* Page Indicator di bawah gambar */}
        <div className="page-indicator">
          {[1, 2, 3].map((num) => (
            <span
              key={num}
              className={`dot${num === 1 ? ' active' : ''}`}
            />
          ))}
      </div>

       {/* Navigation Arrows for mobile interfacew */}
      <div className="topic1-arrows-bottom mobile-only">
        <Link to="" className="arrow-btn-startend" >
            <MdKeyboardDoubleArrowLeft />
          </Link>
        <Link to="" className="arrow-btn">
          <MdChevronLeft />
        </Link>
        <Link to="/topic1/content2" className="arrow-btn" >
          <MdChevronRight  />
        </Link>
        <Link to="/topic1/content3" className="arrow-btn-startend" >
          <MdKeyboardDoubleArrowRight  />
        </Link>
      </div>
    </div>
  )
}