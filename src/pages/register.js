import React from 'react'
import Head from 'next/head'

import Layout from '@components/Auth/Layout'
import GetApp from '@components/Auth/GetApp'
import FormFooter from '@components/Auth/FormFooter'
import SignUpForm from '@components/Auth/SignUpForm'

import styles from '@modules/components/Auth/Common.module.scss'

const register = () => (
  <>
    <Head>
      <title>Login • Instagram</title>
    </Head>
    <Layout>
      <main>
        <div>
          <div className={`${styles.Container} ${styles.FormContent}`}>
            <div className={styles.FormHeader}>
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <p className={styles.SignUpText}>
              Sign up to see photos and videos from your friends.
            </p>
            <button className={`btn ${styles.LoginWithFB}`}>
              <img src="/images/icons/facebook-icon.svg" width="16px" />
              <span>Log in with Facebook</span>
            </button>
            <div className={styles.Or}>
              <hr />
              <span>OR</span>  
            </div> 
            <SignUpForm />
            <p className={styles.Conditions}>
              By signing up, you agree to our <b>Terms , Data Policy and Cookies Policy .</b>
            </p>
          </div>
          <FormFooter label="Have an account?" link="/login" linkTitle="Log in" />
          <GetApp />
        </div>
      </main>
    </Layout>
  </>
)

export default register
