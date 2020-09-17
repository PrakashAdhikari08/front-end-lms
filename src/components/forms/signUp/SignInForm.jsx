import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import PageHeader from "../../PageHeader";
import "./SignUp.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { saveUser } from "../../../api/API";
import DispatchContext from "../../../context/DispatchContext";

const SignInForm = (props) => {
  const appDispatch = useContext(DispatchContext);
  const onSubmit = async (values) => {
    const data = {
      name: values.name,
      username: values.username,
      password: values.password,
    };

    try {
      const response = await saveUser(data);
      props.history.push("/login");
    } catch (error) {
      appDispatch({
        type: "invalidMessage",
        message: "Email already in use. Please use another email",
      });
    }
  };

  const initialValues = {
    name: "",
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter your full Name"),
    username: Yup.string()
      .email("Invalid Email Address")
      .required("Username is requied"),
    password: Yup.string()
      .required("Password Required")
      .min(6, "Password is too short"),
    password1: Yup.string()
      .required("Re-enter Password")
      .test("Password Matched", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <PageHeader title="Sign In">
      <div className="signMain">
        <form action="" className="formRegister" onSubmit={formik.handleSubmit}>
          <div className="formHead">
            <br />
            <strong className="strongMargin">Create Account</strong>
          </div>
          <section>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              {...formik.getFieldProps("name")}
            ></input>
            {formik.touched.name && formik.errors.name ? (
              <p size="sm" style={{ color: "red" }}>
                {formik.errors.name}
              </p>
            ) : null}
          </section>
          <section>
            <label htmlFor="username">Valid Email</label>
            <input
              type="email"
              id="username"
              {...formik.getFieldProps("username")}
            ></input>
            {formik.touched.username && formik.errors.username ? (
              <p size="sm" style={{ color: "red" }}>
                {formik.errors.username}
              </p>
            ) : null}
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              placeholder="  At least 6 Characters"
              {...formik.getFieldProps("password")}
            ></input>
            {formik.touched.password && formik.errors.password ? (
              <p size="sm" style={{ color: "red" }}>
                {formik.errors.password}
              </p>
            ) : null}
            <p className="sec11">Passwords must be at least 6 characters.</p>
          </section>
          <section>
            <label htmlFor="password">Re-enter Password</label>
            <input
              type="password"
              id="password1"
              autoComplete="off"
              {...formik.getFieldProps("password1")}
            ></input>
            {(formik.touched.password1 && formik.errors.password1) ||
            formik.password !== formik.password1 ? (
              <p size="sm" style={{ color: "red" }}>
                {formik.errors.password1}
              </p>
            ) : null}
          </section>
          <section>
            <button type="submit">
              <h4>Register</h4>
            </button>
          </section>
          <section className="sec1">
            <p>
              By creating account, you agree that you have read and accepted our
              Conditions and Privacy terms.
            </p>
          </section>
          <hr className="hr1"></hr>
          <section className="loginlink">
            <p>
              Already have and account? <Link to="/login">Sign In{" >"}</Link>
            </p>
            <br />
          </section>
        </form>
      </div>
    </PageHeader>
  );
};

export default withRouter(SignInForm);
