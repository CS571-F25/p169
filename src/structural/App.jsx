import Matchups from '../components/matchups'
import Players from '../components/players'
import Members from '../components/Members'
import Layout from './layout'
import { HashRouter, Routes, Route } from 'react-router'

function App() {

  return (
      <HashRouter>
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
