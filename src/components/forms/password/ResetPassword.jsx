import React from "react";
import PageHeader from "../../PageHeader";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useParams, withRouter } from "react-router";
import "./Password.css";
import { changePassword } from "../../../api/API";
const ResetPassword = (props) => {
  const onSubmit = async (values) => {
    const data = {
      token: props.match.params.token,
      user: {
        password: values.password,
      },
    };
    try {
      const response = changePassword(data);
      props.history.push("/login");
    } catch (error) {
      console.log(error.response);
    }
  };
  const initialValues = {
    password: "",
  };
  const validationSchema = Yup.object({
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
    <PageHeader title="Change Password">
      <div className="password">
        <form onSubmit={formik.handleSubmit}>
          <br />
          <strong>Enter new password</strong>
          <br />
          <br />
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
          <button className="continue_btn">
            <h4>Change Password</h4>
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

export default withRouter(ResetPassword);
