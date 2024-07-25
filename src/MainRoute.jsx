import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Movies from './Pages/Movies/Movies'

const MainRoute = () => {
  return (
    <Routes>
            <Route path="/" element={<Movies />} />
            
          </Routes>
  )
}

export default MainRoute
