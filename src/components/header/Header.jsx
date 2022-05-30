// import { Image, Flex, Button, HStack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../Redux/Action/DarkMode";
import { logoutAction } from "../../Redux/Action/UserActions";
const Header = () => {
  const dispatch = useDispatch();
  const myReng = useSelector((state) => state.colorReducer);
  const mode = useSelector((state) => state.darkMode);
  const myUser = useSelector((state) => state.loginUser);
  return (
    <header id="header" className={mode.colorMode !== "#fff" ? "active" : ""}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-2">
            <div className="logo">
              <img className="img-fluid" src="./image/logo.png" alt="" />
            </div>
          </div>
          <div className="col-auto">
            <nav style={{ background: `${myReng.reng}` }} className="menu">
              <ul className="d-flex list-unstyled m-0">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="#">item 2</Link>
                </li>
                <li>
                  <Link to="#">item 3</Link>
                </li>
                {myUser && myUser.userInfo && myUser.userInfo.token ? (
                  <li>
                    <Link to="#">
                      <span>{myUser.userInfo.email}</span>
                    </Link>
                    <button onClick={()=>dispatch(logoutAction())}>Logout</button>
                  </li>
                ) : (
                  <>
                    {" "}
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}

                <li>
                  <button
                    onClick={() => dispatch(changeMode("#000"))}
                    className="btn btn-dark"
                  >
                    Black
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => dispatch(changeMode("#fff"))}
                    className="btn btn-secondary"
                  >
                    White
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
