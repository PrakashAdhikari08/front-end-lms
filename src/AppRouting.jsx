import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/naviation/Header";
import LoginForm from "./components/forms/login/LoginForm";
import FormFooter from "./components/forms/formsfooter/Footer";
import ContactUs from "./components/contact/ContactUs";
import SignInForm from "./components/forms/signUp/SignInForm";
import Dashboard from "./components/dashboard/Dashboard";
import Servies from "./components/services/Servies";
import ForgotPassword from "./components/forms/password/ForgotPassword";
import ResetPassword from "./components/forms/password/ResetPassword";
import FlashMessages from "./components/flash/FlashMessage";
import InternOption from "./components/home/intern/InternOption";
import Profile from "./components/dashboard/profile/Profile";
import About from "./components/about/About";
const Routing = (props) => {
  const Route1 = ({ component: Component, ...props }) => (
    <Route
      {...props}
      render={() => (
        <>
          <Header />
          <Component />
          <Footer />
        </>
      )}
    />
  );

  const PublicRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={() => (
          <>
            <FlashMessages />

            <Component />
            <FormFooter />
          </>
        )}
      />
    );
  };
  const PrivateRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={() => (
          <>
            {/* <FlashMessages /> */}
            <Header />
            <Component />
          </>
        )}
      />
    );
  };

  return (
    <Router>
      <Switch>
        <Route1 exact path="/" component={Home} />
        <Route1 path="/home" component={Home} />
        <Route1 path="/contact" component={ContactUs} />
        <Route1 path="/contact" component={ContactUs} />
        <Route1 path="/services" component={Servies} />
        <Route1 path="/get-an-intern" component={InternOption} />
        <Route1 path="/about" component={About} />

        <PublicRoute path="/login" component={LoginForm} />
        <PublicRoute path="/register" component={SignInForm} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
        <PublicRoute
          path="/user/reset-password/:token"
          component={ResetPassword}
        />

        <PrivateRoute path="/dashboard/:id" component={Dashboard} />
        <Route1 path="/profile/:id" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routing;
