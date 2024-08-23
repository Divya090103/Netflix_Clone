import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
const Signup2 = () => {
  //get the info from link tag
  const location = useLocation();
  const { mail } = location.state || {};
  const [data, setdata] = useState({ email: mail, password: "" }); //name should be equal as data model
  //submit the data to the database
  const [state, setstate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Add user to the data base
    try {
      if (data.password.length <= 0) {
        setstate("please enter the password");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/Sign_in",
        data
      );
      console.log("Response:", response.data);
      if (response.data.success) {
        setdata({
          mail: "",
          password: "",
        });
        setstate("Please verify the mail that sent to your mail id");
      } else {
        setstate("user is already present with that mail id");
      }
    } catch (error) {
      console.error("Error:", error);
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
                value={data.email}
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
