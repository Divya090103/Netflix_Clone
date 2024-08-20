import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
const Signup2 = () => {
  //get the info from link tag
  const location = useLocation();
  const { mail } = location.state || {};
  const handleSubmit = () => {};
  const [data, setdata] = useState({ mail: "", password: "" });
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="form mb-3 mt-5 text-white p-5">
          <form onSubmit={handleSubmit}>
            <h3>
              <b>Sign Up</b>
              <hr />
              <h4>To start your membership make a password</h4>
            </h3>
            <div className="mt-3">
              <input
                type="email"
                className="form-control p-2 text-secondary custom-input"
                style={{ backgroundColor: "black" }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email"
                onChange={(e) => setdata({ ...data, email: e.target.value })}
                value={mail}
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
                onChange={(e) => setdata({ ...data, password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-danger form-control">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup2;
