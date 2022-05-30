import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/BaseConfig";
import CourseLessons from "../components/course-lessons/CourseLessons";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setcourse] = useState(null);
  const getCourseById = (myId) => {
    fetch(`${BASE_URL}api/course/${myId}`)
      .then((c) => c.json())
      .then((c) => setcourse(c));
  };
  console.log(course);
  useEffect(() => {
    getCourseById(id);
  }, [id]);
  return (
    <section className="course-detail mt-5" style={{ marginTop: "10rem" }}>
      {course ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <span className="category-name">{course.categoryName}</span>
              <h3 className="title">{course.courseName}</h3>
              <p className="desc">{course.description}</p>
              <div className="course-lessons">
                  {/* {course.lessons?.map(ls=>(
                    <div className="lesson-item">
                          <h5>{ls.name}</h5>
                    </div>
                  ))} */}
                  <CourseLessons lessons={course.lessons}/>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="course-detail-right">
                <img className="img-fluid" src={course.photoUrl} alt="" />
                <p className="price">
                  {course.discount > 0 ? (
                    <>
                      <del>{course.price}</del>
                      <span>{course.discount}</span>
                      AZN
                    </>
                  ) : (
                    <span>{course.price} AZN</span>
                  )}
                </p>
                <button className="btn btn-danger w-100">Watch Video</button>
                <button className="btn btn-outline-dark my-3 w-100">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </section>
  );
};

export default CourseDetail;
