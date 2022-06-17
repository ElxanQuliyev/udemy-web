import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import React, { useEffect,useCallback } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import axios from "axios";
import { BASE_URL } from "../api/BaseConfig";
import CourseCard from "../components/course-card/CourseCard";
function valuetext(value) {
  return `${value} AZN`;
}

const ExplorePage = () => {
  const [price, setPrice] = React.useState([0, 3000]);
  const [sortBy, setSortBy] = React.useState(2);
  const [rating, setRating] = React.useState(0);
  const [selectedInstructors, setSelectedInstructors] = React.useState([]);
  const [courses,setCourses]=React.useState([]);
  const [instructors, setInstructors] = React.useState([]);
  const getInstructors = async () => {
    const { data } = await axios.get(`${BASE_URL}api/instructor`);
    setInstructors(data);
  };

  const getCourse = useCallback(async()=>{
   const {data}= await axios.post(`${BASE_URL}api/course/filter`,
   {
    minPrice:price[0],
    maxPrice:price[1],
    sortBy,
    rating,
    instructorIds:selectedInstructors     
   }) 
   setCourses(data)
  },[price,sortBy,rating,selectedInstructors])

  useEffect(()=>{
    getCourse();
  },[getCourse])
  console.log(courses)
  useEffect(() => {
    getInstructors();
  }, []);

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
  const checkedInstructor=(e)=>{
    const instId=Number(e.target.value);
    if(e.target.checked){
      setSelectedInstructors(i=>[...i,instId])
    }else{
        setSelectedInstructors(ins=>ins.filter(i=>i!==instId))
    }
  }
  return (
    <Container>
      <div className="row my-5">
        <div className="col-lg-3">
          <div className="explore-left">
            <div className="filter-item mb-5">
              <select
                onChange={(e) => setSortBy(e.target.value)}
                className="form-control"
              >
                <option value={2}>New</option>
                <option value={1}>Price Low to High</option>
                <option value={0}>Price High to Low</option>
              </select>
            </div>
            <div className="filter-item my-5">
              <h6>Price:</h6>
              <Slider
                max={3000}
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </div>
            <div className="filter-item my-5">
              <h6>Rating:</h6>
              <ul className="list-unstyled d-flex">
                {[1,2,3,4,5].map((c)=>(
                    <li onClick={()=>setRating(c)}>
                    <StarOutlineIcon  />
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-item my-5">
              {/* <select defaultValue="" className="form-control">
                    <option disabled value="">instructor...</option>
                    {instructors?.map(ins=>(
                        <option value={ins.id}>{ins.fullName}</option>
                    ))}
                </select> */}
              {instructors?.map((ins) => (
                <FormGroup key={ins.id}>
                  <FormControlLabel
                    control={<Checkbox value={ins.id} onChange={e=>checkedInstructor(e)}/>}
                    label={`${ins.fullName}`}
                  />
                </FormGroup>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
          {courses?.map(c=>(
              <CourseCard key={c.courseId} courseInfo={c}/>
          ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExplorePage;
