
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import maintexts from '../maintexts'
import '../topic1/content1.css'

const lang = 'id'

export default function Content1() {
  return (
    <div className="content1-container">
      {/* Baris Atas */}
      <div className="content1-header">
            <div className="content1-title-group">
              <Link to="/choosetopic" className="arrow-btn" title="Kembali ke Pilihan Topik">
                <FaArrowLeft />
              </Link>
              <div className="content1-title">Title content 1</div>
            </div>
        <div className="content1-arrows">
          <button className="arrow-btn"><FaArrowLeft /></button>
          <button className="arrow-btn"><FaArrowRight /></button>
        </div>
      </div>
      {/* Baris Bawah */}
      <div className="content1-body">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Contoh"
          className="content1-img"
        />
      </div>
    </div>
  )
}