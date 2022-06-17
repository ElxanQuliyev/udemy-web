import React, { useCallback, useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { BASE_URL } from "../../api/BaseConfig";
import "./searchForm.scss";
import { Link } from "react-router-dom";
const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const getMyCourse = useCallback(async () => {
    if (searchTerm !== "") {
      const { data } = await axios.post(
        `${BASE_URL}api/course/filter`, {q:searchTerm}, {
          headers: {
            "Content-Type": "application/json-patch+json",
          },
        }
      );
      setCourses(data);
    } else {
      setCourses([]);
    }
  }, [searchTerm]);
  useEffect(() => {
    getMyCourse();
  }, [getMyCourse]);
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    inputRef.current.addEventListener("focus", () => {
      resultRef.current.classList.add("active");
    });

    inputRef.current.addEventListener("focusout", () => {
      setTimeout(()=>{
        resultRef.current.classList.remove("active");
      },200)
    });
  }, []);
  return (
    <div className="input-group search-form p-3">
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="search..."
        aria-describedby="basic-addon2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="input-group-text btn-dark" id="basic-addon2">
        <SearchIcon sx={{ color: "#fff" }} />
      </span>
        <div ref={resultRef} className="dropped-result">
          <ul className="list-unstyled">
            {courses.courseListDtos?.map((c) => (
              <li key={c.courseId}>
                <Link to={`/course-details/${c.courseId}`}>{c.courseName}</Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default SearchForm;
