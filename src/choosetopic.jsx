import { FaRegAddressBook, FaRegSmile } from 'react-icons/fa'
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
        <button className="dashboard-btn choose-btn">Topik 1</button>
        <button className="dashboard-btn choose-btn">Topik 2</button>
        <button className="dashboard-btn choose-btn">Topik 3</button>
        <button className="dashboard-btn choose-btn">Topik 4</button>
      </div>
    </div>
  )
}

export default ChooseTopic
