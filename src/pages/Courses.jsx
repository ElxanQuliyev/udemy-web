import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api/BaseConfig';
import CourseCard from '../components/course-card/CourseCard';

const Courses = () => {
    const {categoryId}=useParams();
    const [courseList,setCourseList]=useState([]);
    const getCourseByCategory=(myId)=>{
        fetch(`${BASE_URL}api/course/category/${myId}`)
        .then(c=>c.json())
        .then(c=>setCourseList(c))
    }
    useEffect(()=>{
        getCourseByCategory(categoryId)
    },[categoryId])
  return (
    <div>
        <h4>Courses</h4>
        {courseList?.map((course)=>(
            <CourseCard key={course.courseId} courseInfo={course}/>
        ))}
    </div>
  )
}

export default Courses