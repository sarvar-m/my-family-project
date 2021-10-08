import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import { isAuth } from "./helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    buttonText: "Submit",
    confirmPasswordError: "",
  });

  const {
    name,
    surname,
    email,
    password,
    confirmPassword,
    confirmPasswordError,
    buttonText,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password Confirmation does not match password");
    } else {
      setValues({
        ...values,
        buttonText: "Submitting",
      });
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_API}/signup`,
        data: { name, surname, email, password },
      })
        .then((response) => {
          console.log("Sign Up Success!", response);
          setValues({
            ...values,
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
            confirmPasswordError: "",
          });
          toast.success(response.data.message);
        })
        .catch((error) => {
          console.log("SIgn Up Error", error.response.data);
          setValues({
            ...values,
            buttonText: "Submit",
            confirmPasswordError: "",
          });
          toast.error(error.response.data.error);
        });
    }
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Name
        </label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control mb-3"
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Surname
        </label>
        <input
          onChange={handleChange("surname")}
          type="text"
          className="form-control mb-3"
          value={surname}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Email
        </label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control mb-3"
          value={email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Password
        </label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control mb-3"
          value={password}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Confirm Password
        </label>
        <input
          onChange={handleChange("confirmPassword")}
          type="password"
          className="form-control mb-3"
          value={confirmPassword}
        />
        {/* <p style={{ color: "red" }}>{confirmPasswordError}</p> */}
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3 my-4">
        <ToastContainer />
        {isAuth() ? <Redirect to="/" /> : null}
        <h1 className="p-5 text-center">Sign Up</h1>
        {signupForm()}
        <br />
        <span>
          Already have an account? Please login{" "}
          <Link to="/signin" className="btn btn-sm btn-outline-primary">
            Login
          </Link>{" "}
        </span>
      </div>
    </Layout>
  );
};

export default Signup;
