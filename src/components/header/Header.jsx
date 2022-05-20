// import { Image, Flex, Button, HStack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import "./header.scss";
import {  useSelector } from "react-redux";
const Header = () => {
    const myReng=useSelector(state=>state.colorReducer)
    console.log(myReng)
  return (
    <header id="header">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-2">
                    <div className="logo">
                        <img className="img-fluid" src="./image/logo.png" alt="" />
                    </div>
                </div>
                <div className="col-auto">
                    {myReng.reng}
                <nav className="menu">
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
                        <li>
                            <Link to="#">item 4</Link>
                        </li>
                        <li>
                            <Link to="#">item 5</Link>
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
