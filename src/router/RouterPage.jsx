import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Homepage from '../pages/Homepage.jsx'
import Project from '../pages/Project.jsx'
import Agence from '../pages/Agence.jsx'

const RouterPage = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/project' element={<Project />} />
      <Route path='/agence' element={<Agence />} />
    </Routes>
    </>
  )
}

export default RouterPage
