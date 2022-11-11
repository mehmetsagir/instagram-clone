import React from "react";
import Head from "next/head";

import GetApp from "src/components/Auth/GetApp";
import FormFooter from "src/components/Auth/FormFooter";
import SignUpForm from "src/components/Auth/SignUpForm";

const register = () => (
  <>
    <Head>
      <title>Login • Instagram</title>
    </Head>
    <div>
      <div className="container form-content">
        <div className="form-header">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <p className="sign-up-text">
          Sign up to see photos and videos from your friends.
        </p>
        <button className="btn login-with-fb">
          <img src="/images/icons/facebook-icon.svg" width="16px" />
          <span>Log in with Facebook</span>
        </button>
        <div className="or">
          <hr />
          <span>OR</span>
        </div>
        <SignUpForm />
        <p className="conditions">
          By signing up, you agree to our{" "}
          <b>Terms , Data Policy and Cookies Policy .</b>
        </p>
      </div>
      <FormFooter label="Have an account?" link="/login" linkTitle="Log in" />
      <GetApp />
    </div>
  </>
);

export default register;
