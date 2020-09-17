import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, withRouter } from "react-router-dom";
import PageHeader from "../../PageHeader";
import * as Yup from "yup";
import { useFormik } from "formik";
import { loginUser } from "../../../api/API";
import DispatchContext from "../../../context/DispatchContext";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const LoginForm = (props) => {
  const appDispatch = useContext(DispatchContext);
  const onSubmit = async (values) => {
    await loginUser(values).then(
      (response) => {
        appDispatch({ type: "login", data: response.data });
        props.history.push("/dashboard/" + response.data.userId);
      },
      (error) =>
        appDispatch({
          type: "invalidMessage",
          message: "Invalid Credentials. Please Check!!",
        })
    );

    // try {
    //   const response = await loginUser(values);
    //   appDispatch({ type: "login", data: response.data });
    //   props.history.push("/dashboard/" + response.data.userId);
    // } catch (error) {
    //   appDispatch({
    //     type: "invalidMessage",
    //     message: "Invalid Credentials. Please Check!!",
    //   });
    // }
  };

  const socialData = {
    name: "",
    email: "",
    accessToken: "",
    id: "",
  };

  const responseFacebook = (response) => {
    // socialData.name = response.name,
    // socialData.email = response.email,
    // socialData.id = response.id,
    // socialData.accessToken = response.accessToken,
    console.log(response.name);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .email("Invalid Email Address")
      .required("Username is requied"),
    password: Yup.string().required("Password Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const [passwordType, setPasswordType] = useState(true);

  return (
    <PageHeader title="Login">
      <div className="login_main">
        <form onSubmit={formik.handleSubmit}>
          <br />
          <strong>Sign-In</strong>

          <section>
            <label htmlFor="username">Enter Username OR Email</label>
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
              type={passwordType ? "password" : "text"}
              id="password"
              autoComplete="off"
              {...formik.getFieldProps("password")}
            ></input>
            {formik.touched.password && formik.errors.password ? (
              <p size="sm" style={{ color: "red" }}>
                {formik.errors.password}
              </p>
            ) : null}
          </section>
          <section className="sec">
            {/* <input type="radio" id="remember" /> */}
            <p onClick={() => setPasswordType(!passwordType)}>Show Password</p>
          </section>
          <section className="sec1">
            <Link to="/forgot-password">Forgot Your Password?</Link>
          </section>
          <section>
            <button type="submit">
              <h4>Login</h4>
            </button>
          </section>
          <div className="social_buttons">
            <FacebookLogin
              appId="746359062877707"
              autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
              cssClass="facebook_button"
              icon="fa-facebook"
              textButton="  Facebook"
            />

            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="google_button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <i class="fab fa-google"></i> Google
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </form>
        <div className="create_main">
          <div className="create_div">
            {/* <hr></hr> */}
            <p>New to the website?</p>

            <button className="create_btn" disabled>
              <Link to="/register">
                <h4>Create your website Account</h4>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};

export default withRouter(LoginForm);
