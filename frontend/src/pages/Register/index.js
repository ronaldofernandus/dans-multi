import React, { useState, useEffect } from "react";
import register from "../../assets/images/register.jpg";
import { Button, Gap, Input } from "../../components/addOns";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { image2 } from "../Register/images/index";

const Register = () => {
  const [input, setInput] = useState({
    photoProfile: "",
    email: "",
    username: "",
    password: "",
  });

  const registrasiUser = async () => {
    try {
      let registrasiUser = await axios({
        method: "POST",
        url: "http://localhost:4000/user/register",
        data: input,
      });
      Swal.fire({
        icon: "success",
        title: "Register Success!",
        text: `You've successfully register an account!`,
      });
      navigate("/");

      console.log(registrasiUser.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const registrasiHandler = () => {
    registrasiUser();
    // navigate("/login");
  };
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>

              <div className="form-group">
                <label for="email">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Please insert email"
                />
              </div>
              <div className="form-group">
                <label for="username">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  onChange={(e) =>
                    setInput({ ...input, username: e.target.value })
                  }
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Please insert username"
                />
              </div>
              <div className="form-group">
                <label for="password">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Please insert password"
                />
              </div>

              <div className="form-group form-button">
                <input
                  onClick={() => registrasiHandler()}
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
            </div>
            <div className="signup-image">
              <figure>
                <img src={image2} alt="sing up image" />
              </figure>
              <Link to="/login" className="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
