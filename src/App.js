import { Route, Routes } from 'react-router-dom'
import AllMeetup from './pages/AllMeetup'
import NewMeetup from './pages/NewMeetup'
import Favoirtes from './pages/Favoirtes'
import Layout from './components/layouts/Layout'
function App () {
  return (

    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetup />} />
        <Route path='/new-meetup' element={<NewMeetup />} />
        <Route path='/favoirtes' element={<Favoirtes />} />
      </Routes>
    </Layout>

  )
}

export default App
