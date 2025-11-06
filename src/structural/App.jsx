import Matchups from '../pages/matchups'
import Players from '../pages/Players'
import Members from '../pages/Members'
import Layout from './layout'
import { HashRouter, Routes, Route } from 'react-router'
import InitialModal from '../components/InitialModal'

function App() {

  return (
      <HashRouter>
        { sessionStorage.getItem('leagueId') != null ? '' : <InitialModal /> }
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Members/>}></Route>
            <Route path="/" element={<Members/>}></Route>
            <Route path="/matchups" element={<Matchups/>}></Route>
            <Route path="/players" element={<Players/>}></Route>
          </Route>
        </Routes>
      </HashRouter>
  )
}

export default App
