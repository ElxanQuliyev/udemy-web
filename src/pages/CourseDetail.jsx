import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api/BaseConfig'

const CourseDetail = () => {
  const {id}=useParams()
  const [course, setcourse] = useState(null)
  const getCourseById= (myId) =>{
    fetch(`${BASE_URL}api/course/${myId}`).then(c=>c.json()).then(c=>setcourse(c));
  }
  console.log(course)
  useEffect(()=>{
    getCourseById(id)
  },[id])
  return (
    <div className='mt-5' style={{marginTop:"10rem"}}>
      {course?(

      <div>
          <img className='img-fluid' src={course.photoUrl} alt="" />
          <h4>{course.name}</h4>
        </div>
      ):<p>loading</p> }
    </div>
  )
}

export default CourseDetail