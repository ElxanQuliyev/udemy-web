import React from "react";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="cbox-1">
        <Link to="/course-details">
          <img
            class="img-fluid"
            src="./image/course-1-img.jpg"
            alt="course-preview"
          />
          <div class="cbox-4-txt">
            <p class="course-tags">
              <span>Languages</span>
              <span>English</span>
            </p>
            <h5 class="h5-xs">Beginner Level English - Foundations</h5>
            <div class="course-rating clearfix">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>4.5 (26 Ratings)</span>
            </div>
            <span class="course-price">
              <span class="old-price">$149.99</span>$138.99
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
