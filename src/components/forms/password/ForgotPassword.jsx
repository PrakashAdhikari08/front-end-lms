import React from "react";
import PageHeader from "../../PageHeader";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./Password.css";
import { passwordResetRequest } from "../../../api/API";
const ForgotPassword = (props) => {
  const initialValues = {
    username: "",
  };
  const onSubmit = async (values) => {
    try {
      passwordResetRequest(values.username);
      props.history.push("/");
    } catch (error) {
      console.log("Invalid username");
    }
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .email("Invalid Email Address")
      .required("Email is requied"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <PageHeader title="Forgot Password">
      <div className="password">
        <form onSubmit={formik.handleSubmit}>
          <br />
          <strong>Forgot Password</strong>
          <section>
            <p>
              Enter the email address associated with your HacerCode account.
            </p>
          </section>
          <br />
          <section>
            <label htmlFor="username">Enter Email</label>
            <input
              type="email"
              id="username"
              placeholder="Enter Email"
              {...formik.getFieldProps("username")}
            ></input>
            {formik.touched.username && formik.errors.username ? (
              <p size="sm" style={{ color: "red" }}>
                {formik.errors.username}
              </p>
            ) : null}
          </section>
          <section></section>
          <button className="continue_btn" type="submit">
            <h4>Continue</h4>
          </button>
        </form>
        <div className="footer-text">
          <p>
            Has your email id changed or you are not using the same email used
            to registerd
          </p>
          <small>
            If you no longer use the email address associated with your account,
            you may contact{" "}
            <strong>
              <Link>Customer Service</Link>
            </strong>{" "}
            for help restoring access to your account.
          </small>
        </div>
      </div>
    </PageHeader>
  );
};

export default withRouter(ForgotPassword);
