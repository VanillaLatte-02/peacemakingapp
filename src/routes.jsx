import { Routes, Route } from 'react-router-dom'
import ChooseTopic from './choosetopic'
import Dashboard from './Dashboard'
import ChooseSubTopic_Topic3 from './choosesubtopic_topic3'

import Topic1Content1 from './topic1/content1'
import Topic1Content2 from './topic1/content2'

import Topic3Content1 from './content1_topic3'

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

import Topic4Content1 from './topic4/content1'
import Topic4Content2 from './topic4/content2'
import Topic4Content3 from './topic4/content3'
import Topic4Content4 from './topic4/content4'
import Topic4Content5 from './topic4/content5'
import Topic4Content6 from './topic4/content6'
import Topic4Content7 from './topic4/content7'

import Subtopic1Content1 from './subtopic1/content1'
import Subtopic1Content2 from './subtopic1/content2'
import Subtopic1Content3 from './subtopic1/content3'
import Subtopic1Content4 from './subtopic1/content4'
import Subtopic1Content5 from './subtopic1/content5'
import Subtopic1Content6 from './subtopic1/content6'
import Subtopic1Content7 from './subtopic1/content7'
import Subtopic1Content8 from './subtopic1/content8'
import Subtopic1Content9 from './subtopic1/content9'
import Subtopic1Content10 from './subtopic1/content10'

import Subtopic2Content1 from './subtopic2/content1'
import Subtopic2Content2 from './subtopic2/content2'
import Subtopic2Content3 from './subtopic2/content3'
import Subtopic2Content4 from './subtopic2/content4'
import Subtopic2Content5 from './subtopic2/content5'

import Subtopic3Content1 from './subtopic3/content1'
import Subtopic3Content2 from './subtopic3/content2'
import Subtopic3Content3 from './subtopic3/content3'

import Subtopic4Content1 from './subtopic4/content1'
import Subtopic4Content2 from './subtopic4/content2'
import Subtopic4Content3 from './subtopic4/content3'
import Subtopic4Content4 from './subtopic4/content4'
import Subtopic4Content5 from './subtopic4/content5'
import Subtopic4Content6 from './subtopic4/content6'
import Subtopic4Content7 from './subtopic4/content7'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/choosetopic" element={<ChooseTopic />} />
      <Route path="/choosesubtopic_topic3" element={<ChooseSubTopic_Topic3 />} />

      <Route path="/topic1/content1" element={<Topic1Content1 />} />
      <Route path="/topic1/content2" element={<Topic1Content2 />} />

      <Route path="/content1_topic3" element={<Topic3Content1 />} />

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

      <Route path="/topic4/content1" element={<Topic4Content1 />} />
      <Route path="/topic4/content2" element={<Topic4Content2 />} />
      <Route path="/topic4/content3" element={<Topic4Content3 />} />
      <Route path="/topic4/content4" element={<Topic4Content4 />} />
      <Route path="/topic4/content5" element={<Topic4Content5 />} />
      <Route path="/topic4/content6" element={<Topic4Content6 />} />
      <Route path="/topic4/content7" element={<Topic4Content7 />} />

      <Route path="/subtopic1/content1" element={<Subtopic1Content1 />} />
      <Route path="/subtopic1/content2" element={<Subtopic1Content2 />} />
      <Route path="/subtopic1/content3" element={<Subtopic1Content3 />} />
      <Route path="/subtopic1/content4" element={<Subtopic1Content4 />} />
      <Route path="/subtopic1/content5" element={<Subtopic1Content5 />} />
      <Route path="/subtopic1/content6" element={<Subtopic1Content6 />} />
      <Route path="/subtopic1/content7" element={<Subtopic1Content7 />} />
      <Route path="/subtopic1/content8" element={<Subtopic1Content8 />} />      
      <Route path="/subtopic1/content9" element={<Subtopic1Content9 />} />
      <Route path="/subtopic1/content10" element={<Subtopic1Content10 />}/>

      <Route path="/subtopic2/content1" element={<Subtopic2Content1 />}/>
      <Route path="/subtopic2/content2" element={<Subtopic2Content2 />}/>
      <Route path="/subtopic2/content3" element={<Subtopic2Content3 />}/>
      <Route path="/subtopic2/content4" element={<Subtopic2Content4 />}/>
      <Route path="/subtopic2/content5" element={<Subtopic2Content5 />}/>

      <Route path="/subtopic3/content1" element={<Subtopic3Content1 />}/>
      <Route path="/subtopic3/content2" element={<Subtopic3Content2 />}/>
      <Route path="/subtopic3/content3" element={<Subtopic3Content3 />}/>

      <Route path="/subtopic4/content1" element={<Subtopic4Content1 />}/>
      <Route path="/subtopic4/content2" element={<Subtopic4Content2 />}/>
      <Route path="/subtopic4/content3" element={<Subtopic4Content3 />}/>
      <Route path="/subtopic4/content4" element={<Subtopic4Content4 />}/>
      <Route path="/subtopic4/content5" element={<Subtopic4Content5 />}/>
      <Route path="/subtopic4/content6" element={<Subtopic4Content6 />}/>
      <Route path="/subtopic4/content7" element={<Subtopic4Content7 />}/>
    </Routes>
  )
}
