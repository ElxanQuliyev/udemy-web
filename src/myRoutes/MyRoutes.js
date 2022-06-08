import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseDetail from '../pages/CourseDetail'
import Courses from '../pages/Courses'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/Register'
import Cart from "../pages/Cart";
import FilterCourse from '../pages/FilterCourse'
import ExplorePage from '../pages/ExplorePage'
const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course-details/:id" element={<CourseDetail/>}/>
        <Route path="/courses/:categoryId" element={<Courses/>}/>
        <Route path="/search/:term" element={<FilterCourse/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
    </Routes>
  )
}

export default MyRoutes