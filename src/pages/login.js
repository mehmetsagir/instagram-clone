import React from "react";
import Head from "next/head";
import Link from "next/link";

import SignInForm from "@components/Auth/SignInForm";
import FormFooter from "@components/Auth/FormFooter";
import GetApp from "@components/Auth/GetApp";

import styles from "@modules/Auth/Common.module.scss";

const login = () => {
  return (
    <>
      <Head>
        <title>Login • Instagram</title>
      </Head>

      <>
        <div className={styles.Phone}>
          <img
            src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
            alt="image"
          />
        </div>
        <div>
          <div className={styles.Container}>
            <div className={styles.FormHeader}>
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <div className={styles.FormContent}>
              <SignInForm />
              <div className={styles.Or}>
                <hr />
                <span>OR</span>
              </div>
              <button className={`btn ${styles.LoginWithFB}`}>
                <img src="/images/icons/facebook-icon.svg" width="16px" />
                <span>Log in with Facebook</span>
              </button>
              <Link href="#">
                <a className={styles.ForgetPassword}>Forgot Pasword?</a>
              </Link>
            </div>
          </div>
          <FormFooter
            label="Don't have an account?"
            link="/register"
            linkTitle="Sign up"
          />
          <GetApp />
        </div>
      </>
    </>
  );
};

export default login;
