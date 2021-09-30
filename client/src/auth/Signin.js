import axios from "axios";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { authenticate, isAuth } from "./helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValues({
      ...values,
      buttonText: "Submitting",
    });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("Sign In Success!", response);
        authenticate(response, () => {
          setValues({
            ...values,
            email: "",
            password: "",
          });
          // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
          isAuth() && isAuth().role === "admin"
            ? history.push("/admin")
            : history.push("/private");
        });
      })
      .catch((error) => {
        console.log("Sign In Error", error.response.data);
        setValues({
          ...values,
          buttonText: "Submit",
        });
        toast.error(error.response.data.error);
      });
  };

  const signinForm = () => (
    <form>
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
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          {buttonText}
        </button>
        <Link
          to="/auth/password/forgot"
          // className="btn btn-sm btn-outline-danger"
        >
          <button className="btn btn-danger m-3" onClick={handleSubmit}>
            Forgot Password
          </button>
        </Link>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3 my-4">
        <ToastContainer />
        {isAuth() ? <Redirect to="/" /> : null}
        <h1 className="p-5 text-center">Sign In</h1>
        {signinForm()}
      </div>
    </Layout>
  );
};

export default Signin;
