import React from "react";
import Button from "./Button";
import Link from "./Link";
import Input from "./Input";
import "./styles.css";

const LoginForm = () => {
  return (
    <div className="overall">
      <div className="head">
        <div className="sign-in">
          <h2>Sign In</h2>
        </div>
        <div className="title">
          <h4>Not registered yet?</h4>
          <h4 className="sign-up">
            <Link href="https://google.com" className="sign-up-link" target="_blank">
              Sign Up
            </Link>
          </h4>
        </div>
      </div>

      <span className="border"></span>

      <div className="body">
        <div className="email-box">
          <label className="email-label">Email:</label>
          <Input className="input email-input" type="text" placeholder="Email address" />
        </div>

        <div className="password-box">
          <label className="password">Password:</label>
          <Input className="input password-input" type="text" placeholder="Password" />
        </div>

        <div className="bottom">
          <Button className="button">SIGN IN</Button>
          <div className="forgot">
            <Link href="" className="forgot-link">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>

      <span className="end">
        <a>Powered by</a>
        <Link href="" className="tokens" target="_blank">
          SuperTokens
        </Link>
      </span>
    </div>
  );
};

export default LoginForm;
