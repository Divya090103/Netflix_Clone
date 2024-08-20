import React, { useState } from "react";
import Background from "../Component/Background";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [verify, setverify] = useState(false); //useer is verified or not
  const [present, setpresent] = useState(false); //user is present or not

  const [data, setdata] = useState({ email: "", password: "" });

  //check in backend if user present
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form is going to submit");
    console.log(data.email);
    console.log(data.password);
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
    console.log(typeof fetchdat);
    const response = await fetchdat.json();
    if (response.success) {
      if (response.user.verified) {
        localStorage.setItem("user", response.user);
        localStorage.setItem("authorize", response.user.JwtToken);
        navigate("/");
      } else {
        setverify(true);
      }
    } else {
      alert("user is not present with that mail id");
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
              <form onSubmit={handleSubmit} >
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
                  <Link to="/Sign_up" className="text-white">
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
      {verify ? (
        <>
          <>
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setverify(false)} // Option to close the modal and reset cart state
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Please verify ur mail id</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => setverify(false)} // Close the modal
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Login;
