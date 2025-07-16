import { FaRegAddressBook, FaRegSmile } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './choosetopic.css'

function ChooseTopic() {
  return (
    <div className="choose-topic-container">
      {/* Kolom Kiri */}
      <div className="choose-topic-left">
        <FaRegAddressBook size={64} color="#333" />
        <h2>Choose Topic</h2>
      </div>
      {/* Kolom Kanan */}
      <div className="choose-topic-right">
        <Link to="/topic1/content1" className="dashboard-btn choose-btn">Topic 1</Link>
        <button className="dashboard-btn choose-btn">Topic 2</button>
        <button className="dashboard-btn choose-btn">Topic 3</button>
        <button className ="dashboard-btn choose-btn">Topic 4</button>
      </div>
    </div>
  )
}

export default ChooseTopic
