import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../course-card/CourseCard";

const PopularCourses = () => {
  return (
    <section id="popular-courses" className="courses-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-5 d-flex justify-content-between align-items-center">
                <div className="col-lg-7">
                <div className="section-title-left">
                <h3 className="h3-sm">Most Popular Courses</h3>
                <p className="p-md">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta
                </p>
              </div>

                </div>
              
              <div className="title-btn">
                <Link className="btn btn-outline-dark rose-hover" to="/courses-list">
                  View All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
