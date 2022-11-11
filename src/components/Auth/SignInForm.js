import React, { useState } from "react";

import Button from "src/components/Button";
import router from "next/router";
import Form from "src/components/Form";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsHide, setPasswordIsHide] = useState(true);

  const formControl = () => {
    if (username.length > 0 && password.length > 0) {
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
      <label className={`input-box ${inputActiveClass(username)}`}>
        <input
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <span>Phone number, username, or email</span>
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
      <Button disabled={!formControl()}>Log In</Button>
    </Form>
  );
};

export default SignInForm;
