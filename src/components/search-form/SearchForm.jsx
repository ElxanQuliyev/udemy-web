import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { BASE_URL } from "../../api/BaseConfig";
import slugify from "react-slugify";

const SearchForm = () => {
    const [searchTerm,setSearchTerm] = useState("")
    const [courses,setCourses]=useState("");
    const getMyCourse=async(q)=>{
        if(searchTerm!==""){
            let {data}=await axios.get(`${BASE_URL}api/course/filter/${searchTerm}`);
            setCourses(data)
        }
    }
    useEffect(()=>{
        getMyCourse(searchTerm)
    },[searchTerm,getMyCourse])
    console.log(courses)
  return (
    <div>
      <div className="input-group p-3">
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <span className="input-group-text btn-dark" id="basic-addon2">
          <SearchIcon sx={{ color: "#fff" }} />
        </span>
      </div>
    </div>
  );
};

export default SearchForm;
