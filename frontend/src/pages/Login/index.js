import React, { useState, useEffect } from "react";

import "./css/style.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate;
  const { loginCbHandler } = props;
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let login = await axios({
        method: "POST",
        url: "http://localhost:4000/user/login",
        data: form,
      });
      const get_token = login.data.get_token;
      localStorage.setItem("get_token", get_token);
      loginCbHandler(true);
      navigate("/home");
      // console.log(login.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loginButton = () => {
    // console.log(form);
    loginUser();
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div className="form-outline form-white mb-4">
                    <input
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                      type="username"
                      id="username"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="username">
                      Username
                    </label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="password">
                      Password
                    </label>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <Link className="text-white-50" to="/">
                      Forgot password?
                    </Link>
                  </p>

                  <button
                    onClick={() => loginButton()}
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>

                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <Link to="/" className="text-white">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </Link>
                    <Link to="/" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </Link>
                    <Link to="/" className="text-white">
                      <i className="fab fa-google fa-lg"></i>
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
