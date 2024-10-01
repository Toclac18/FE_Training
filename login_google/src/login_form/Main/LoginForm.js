import React from "react";
import Link from "../Components/Link";
import "../CSS/styles.css";
import MyForm from "../Components/MyForm";

const LoginForm = () => {
  return (
    <div className="overall">
      <div className="head">
        <div className="sign-in">
          <h2>Log In</h2>
        </div>
        <div className="title">
          <h4>Not registered yet?</h4>
          <h4 className="sign-up">
            <Link
              href="https://accounts.google.com/lifecycle/steps/signup/name?ddm=0&dsh=S1310344778:1725431336799703&flowEntry=SignUp&flowName=GlifWebSignIn&TL=AKeb6mxNfgkmjym-gO9XAHJoqFlq7SvmxmRjhM8QQrJOGU-Xn4LCcQqqojf_XvOy"
              className="sign-up-link"
              target="_blank"
            >
              Sign Up
            </Link>
          </h4>
        </div>
      </div>

      <span className="border"></span>

      <div className="body"> 
        <MyForm/>
        <div className="bottom">
          <div className="forgot">
            <Link
              href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop"
              className="forgot-link"
              target="_blank"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>

      <span className="end">
        <a>Powered by</a>
        <Link href="https://supertokens.com/" className="tokens" target="_blank">
          SuperTokens
        </Link>
      </span>
    </div>
  );
};

export default LoginForm;




