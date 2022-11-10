import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "../../index.css";
const Navbar = (props) => {
  const { loginStatus, loginCbHandler } = props;
  const navigate = useNavigate();
  const loginButton = () => {
    loginCbHandler(true);
  };

  const logoutButton = () => {
    localStorage.clear();
    loginCbHandler(false);
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            JobSeeker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
            {loginStatus ? (
              <button
                onClick={() => logoutButton()}
                className="btn btn-outline-success"
                type="submit"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => loginButton()}
                className="btn btn-outline-success"
                type="submit"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
