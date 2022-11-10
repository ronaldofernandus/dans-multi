import React from "react";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import DetailJobs from "../../pages/Home/detailJobs";
import Profile from "../../pages/Profile/index";

const MainContent = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <Navbar
            loginStatus={loginStatus}
            loginCbHandler={loginCbHandler}
          ></Navbar>
        </div>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route path="positions">
              <Route path="detail">
                <Route path=":id" element={<DetailJobs></DetailJobs>}></Route>
              </Route>
            </Route>

            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MainContent;
