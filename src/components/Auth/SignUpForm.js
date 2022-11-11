import React, { useState } from "react";

import Button from "src/components/Button";

import router from "next/router";
import Form from "src/components/Form";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsHide, setPasswordIsHide] = useState(true);

  const formControl = () => {
    if (
      email.length > 0 &&
      userName.length > 0 &&
      password.length > 0 &&
      fullName.length > 0
    ) {
      return true;
    }
    return false;
  };

  const inputActiveClass = (el) => {
    if (el.length > 0) return "active";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formControl()) {
      router.push("/");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label className={`${inputActiveClass(email)}`}>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <span>Email</span>
      </label>

      <label className={`input-box ${inputActiveClass(fullName)}`}>
        <input
          className="input"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
        />
        <span>Full Name</span>
      </label>

      <label className={`input-box ${inputActiveClass(userName)}`}>
        <input
          className="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
        />
        <span>Username</span>
      </label>

      <label className={`input-box ${inputActiveClass(password)}`}>
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={passwordIsHide ? "password" : "text"}
        />
        <span>Password</span>
        <button
          className="btn"
          type="button"
          onClick={() => setPasswordIsHide(!passwordIsHide)}
        >
          {passwordIsHide ? "Show" : "Hide"}
        </button>
      </label>

      <Button disabled={!formControl()}>Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
