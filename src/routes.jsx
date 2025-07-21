import { Routes, Route } from 'react-router-dom'
import ChooseTopic from './choosetopic'
import Dashboard from './Dashboard'
import ChooseSubTopic_Topic3 from './choosesubtopic_topic3'

import Topic1Content1 from './topic1/content1'
import Topic1Content2 from './topic1/content2'

import Topic2Content1 from './topic2/content1'
import Topic2Content2 from './topic2/content2'
import Topic2Content3 from './topic2/content3'
import Topic2Content4 from './topic2/content4'
import Topic2Content5 from './topic2/content5'
import Topic2Content6 from './topic2/content6'
import Topic2Content7 from './topic2/content7'
import Topic2Content8 from './topic2/content8'
import Topic2Content9 from './topic2/content9'
import Topic2Content10 from './topic2/content10'
import Topic2Content11 from './topic2/content11'
import Topic2Content12 from './topic2/content12'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/choosetopic" element={<ChooseTopic />} />
      <Route path="/choosesubtopic_topic3" element={<ChooseSubTopic_Topic3 />} />

      <Route path="/topic1/content1" element={<Topic1Content1 />} />
      <Route path="/topic1/content2" element={<Topic1Content2 />} />

      <Route path="/topic2/content1" element={<Topic2Content1 />} />
      <Route path="/topic2/content2" element={<Topic2Content2 />} />
      <Route path="/topic2/content3" element={<Topic2Content3 />} />
      <Route path="/topic2/content4" element={<Topic2Content4 />} />
      <Route path="/topic2/content5" element={<Topic2Content5 />} />
      <Route path="/topic2/content6" element={<Topic2Content6 />} />
      <Route path="/topic2/content7" element={<Topic2Content7 />} />
      <Route path="/topic2/content8" element={<Topic2Content8 />} />
      <Route path="/topic2/content9" element={<Topic2Content9 />} />
      <Route path="/topic2/content10" element={<Topic2Content10 />} />
      <Route path="/topic2/content11" element={<Topic2Content11 />} />
      <Route path="/topic2/content12" element={<Topic2Content12 />} />

    </Routes>
  )
}
