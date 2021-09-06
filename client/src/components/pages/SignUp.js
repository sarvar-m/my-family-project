import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const SignUp = () => {
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
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <div className="col-md-6 offset-md-3">
      <h1 className="p-5 text-center my-4">Sign Up</h1>
      {signupForm()}
      <br />
      <br />
      <p>
        If you already have registered, please <Link to="/login">Log In</Link>{" "}
        here
      </p>
    </div>
  );
};

export default SignUp;
