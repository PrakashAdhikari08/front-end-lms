import React from "react";
import "./ContactForm.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { contactUs } from "../../api/API";
import { withRouter } from "react-router-dom";
const ContactForm = (props) => {
  const onSubmit = async (values) => {
    await contactUs(values).then(
      () => {
        props.history.push("/");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Username is requied"),
    name: Yup.string().required("Please enter your name"),
    message: Yup.string().required("Please enter your message"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="main">
      <form className="form_main" onSubmit={formik.handleSubmit}>
        <br></br>
        <h3>LEAVE US MESSAGE</h3>
        <input
          type="text"
          placeholder="Name"
          id="name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <p size="sm" style={{ color: "red" }}>
            {formik.errors.name}
          </p>
        ) : null}
        <input
          type="text"
          placeholder="Email"
          id="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <p size="sm" style={{ color: "red" }}>
            {formik.errors.email}
          </p>
        ) : null}
        <textarea
          row="3"
          placeholder="Message"
          {...formik.getFieldProps("message")}
        />
        {formik.touched.message && formik.errors.message ? (
          <p size="sm" style={{ color: "red" }}>
            {formik.errors.message}
          </p>
        ) : null}
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default withRouter(ContactForm);
