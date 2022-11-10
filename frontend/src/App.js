import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/index";
// import Login from "./pages/Login";
import Navbar from "./components/Navbar/index";
import MainContent from "./components/MainContent/index";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  useEffect(() => {
    if (localStorage.getItem("get_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  return (
    <div className="wrapper">
      {!loginStatus ? (
        <Login loginCbHandler={loginCbHandler}></Login>
      ) : (
        <MainContent loginStatus={loginStatus} loginCbHandler={loginCbHandler}>
          {" "}
        </MainContent>
      )}
    </div>
  );
}

export default App;
