import React, { useState } from "react";
import Background from "../Component/Background";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("");

  const [data, setdata] = useState({ email: "", password: "" });

  //check in backend if user present
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form is going to submit");
    console.log(data.email);
    console.log(data.password);
    try {
      const fetchdat = await fetch("http://localhost:5000/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const response = await fetchdat.json();
      console.log(response);
      if (response.success) {
        if (response.user.verified) {
          console.log(response.user);
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("authorize", response.user.JwtToken);
          navigate("/logged");
        } else {
          setState("user is not verified yet");
        }
      } else {
        setState("Incorrect password");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {/* background image */}
      <Background />
      {/* heasdre */}
      <div>
        <header className="content">
          <h1 className="text-danger container">
            <b>NETFLIX</b>
          </h1>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="form s2 text-white p-5">
              <form onSubmit={handleSubmit}>
                <h3>
                  <b>Sign in</b>
                </h3>
                <div className="mt-5">
                  <input
                    type="email"
                    className="form-control p-2 text-secondary custom-input"
                    style={{ backgroundColor: "black" }}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="email"
                    onChange={(e) =>
                      setdata({ ...data, email: e.target.value })
                    }
                  />
                  <div id="emailHelp" className="form-text text-secondary">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  ></label>
                  <input
                    type="password"
                    className="form-control p-2 custom-input"
                    style={{ backgroundColor: "black" }}
                    id="exampleInputPassword1"
                    placeholder="password"
                    onChange={(e) =>
                      setdata({ ...data, password: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-danger form-control">
                  Submit
                </button>
                <center>
                  OR
                  <br />
                  <Link to="/password_change" className="text-white">
                    Forgot Password?
                  </Link>
                </center>
                <div className="d-flex mt-3">
                  <p className="text-secondary">New to Netflix?</p>
                  <Link to="/" className="text-white">
                    SignUP now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </header>
      </div>
      {state && <div className="mt-3 alert alert-warning">{state}</div>}
    </>
  );
};
export default Login;
