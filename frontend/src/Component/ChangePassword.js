import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
const Password = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [state, setstate] = useState("");
  const handleSubmit = async (e) => {
    console.log("going to submit the passord change request");
    e.preventDefault();
    console.log(data.email);
    console.log(data.password);

    if(data.password.length==0){
      setstate("Please enter the new password");
      return ;
    }
    if (data.password.length>0&&data.password === data.confirmPassword) {
      //add to change the pass ward from tne backend
      try {
        const send = await axios.post(
          "http://localhost:5000/api/password_change",
          data
        );

        console.log(send.data);
        if (send.data.success) {
          setstate("password change Successfully");
          setdata({
            email: "",
            password: "",
            confirmPassword: "",
          });
        } 
        else {
          setstate("user is not present with that mail id");
        }
      } catch (e) {
        console.log("Error:", e);
        setstate("An error occurred while changing the password");
      }
    } else {
      setstate("Passwords do not match");
    }
  };
  return (
    <>
      <Navbar />
      {state && <div className="mt-3 alert alert-warning">{state}</div>}
      <div className="container d-flex justify-content-center align-items-center">
        <div className="form mb-3 mt-5 text-white p-5">
          <form onSubmit={handleSubmit}>
            <h3>
              <b>Sign Up</b>
              <hr />
            </h3>
            <h4>To start your membership make a password</h4>
            <div className="mt-3">
              <input
                type="email"
                className="form-control p-2 text-secondary custom-input"
                style={{ backgroundColor: "black" }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email"
                onChange={(e) => {
                  setdata({ ...data, email: e.target.value });
                }}
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
                onChange={(e) => {
                  setdata({ ...data, password: e.target.value });
                }}
              />
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
                placeholder="Confirm password"
                onChange={(e) => {
                  setdata({ ...data, confirmPassword: e.target.value });
                }}
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
export default Password;
