import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import React, { useEffect } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import axios from "axios";
import { BASE_URL } from "../api/BaseConfig";
function valuetext(value) {
  return `${value} AZN`;
}

const ExplorePage = () => {
  const [price, setPrice] = React.useState([0, 3000]);
  const [sortBy, setSortBy] = React.useState(2);

  const [instructors, setInstructors] = React.useState([]);
  console.log(instructors);

  const getInstructors = async () => {
    const { data } = await axios.get(`${BASE_URL}api/instructor`);
    setInstructors(data);
  };

  useEffect(() => {
    getInstructors();
  }, []);

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
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
                <li>
                  <StarOutlineIcon />
                </li>
                <li>
                  <StarOutlineIcon />
                </li>
                <li>
                  <StarOutlineIcon />
                </li>
                <li>
                  <StarOutlineIcon />
                </li>
                <li>
                  <StarOutlineIcon />
                </li>
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
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={`${ins.fullName}`}
                  />
                </FormGroup>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-9">9</div>
      </div>
    </Container>
  );
};

export default ExplorePage;
