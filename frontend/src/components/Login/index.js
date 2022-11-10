import React from "react";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/Login/index";
import RegisterPage from "../../pages/Register/index";

const Login = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                loginStatus={loginStatus}
                loginCbHandler={loginCbHandler}
              ></LoginPage>
            }
          ></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default Login;
