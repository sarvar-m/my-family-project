import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import { isAuth, getCookie, signout, updateUser } from "../auth/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Admin = ({ history }) => {
  const [values, setValues] = useState({
    role: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    buttonText: "Submit",
  });

  const token = getCookie("token");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/user/${isAuth()._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("PRIVATE PROFILE UPDATE", response);
        const { role, surname, name, email } = response.data;
        setValues({ ...values, role, name, surname, email });
      })
      .catch((error) => {
        console.log("PRIVATE PROFILE UPDATE ERROR", error.response.data.error);
        if (error.response.status === 401) {
          signout(() => {
            history.push("/");
          });
        }
      });
  };

  const { role, name, surname, email, password, confirmPassword, buttonText } =
    values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password Confirmation does not match password");
      setValues({
        ...values,
        password: "",
        confirmPassword: "",
      });
    } else {
      setValues({
        ...values,
        buttonText: "Submitting",
      });
      axios({
        method: "PUT",
        url: `${process.env.REACT_APP_API}/admin/update`,
        data: { name, surname, password },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log("Private Profile Update Success!", response);
          updateUser(response, () => {
            setValues({
              ...values,
              buttonText: "Submitted",
            });
            toast.success("Profile Updated Successfully!");
          });
        })
        .catch((error) => {
          console.log(
            "Private Profile Update Error",
            error.response.data.error
          );
          setValues({
            ...values,
            buttonText: "Submit",
          });
          toast.error(error.response.data.error);
        });
    }
  };

  const updateForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Role</label>
        <input
          type="text"
          className="form-control mb-3"
          defaultValue={role}
          disabled
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control mb-3"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Surname</label>
        <input
          onChange={handleChange("surname")}
          type="text"
          className="form-control mb-3"
          value={surname}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          className="form-control mb-3"
          defaultValue={email}
          disabled
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control mb-3"
          value={password}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Confirm Password</label>
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
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        <h1 className="pt-5 text-center">Admin</h1>
        <p className="lead text-center">Profile Update</p>
        {updateForm()}
      </div>
    </Layout>
  );
};

export default Admin;
