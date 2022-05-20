import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseDetail from '../pages/CourseDetail'
import Courses from '../pages/Courses'
import Home from '../pages/Home'
import Register from '../pages/Register'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course-details/:id" element={<CourseDetail/>}/>
        <Route path="/courses/:id" element={<Courses/>}/>
        <Route path="/register" element={<Register/>}/>


    </Routes>
  )
}

export default MyRoutes