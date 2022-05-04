import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseDetail from '../pages/CourseDetail'
import Home from '../pages/Home'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course-details/:id" element={<CourseDetail/>}/>

    </Routes>
  )
}

export default MyRoutes