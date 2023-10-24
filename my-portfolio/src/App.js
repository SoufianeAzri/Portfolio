import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import ProjectsDisplay from './component/ProjectsDisplay'

function App (){
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:id" element={<ProjectsDisplay />} />
        </Routes>
    </Router>
  )
}
export default App;