// import React from "react";
// import Button from "../Components/Button";
// import Link from "../Components/Link";
// import Input from "../Components/Input";
// import "../CSS/styles.css";
// import { eventWrapper } from "@testing-library/user-event/dist/utils";

// const LoginForm = () => {
//   return (
//     <div className="overall">
//       <div className="head">
//         <div className="sign-in">
//           <h2>Sign In</h2>
//         </div>
//         <div className="title">
//           <h4>Not registered yet?</h4>
//           <h4 className="sign-up">
//             <Link href="https://google.com" className="sign-up-link" target="_blank">
//               Sign Up
//             </Link>
//           </h4>
//         </div>
//       </div>

//       <span className="border"></span>

//       <div className="body">
//         <div className="email-box">
//           <label className="email-label">Email:</label>
//           <Input className="input email-input" type="text" placeholder="Email address" />
//         </div>

//         <div className="password-box">
//           <label className="password">Password:</label>
//           <Input className="input password-input" type="text" placeholder="Password" />
//         </div>

//         <div className="bottom">
//           <Button className="button" onclick="returnHome()">LOG IN</Button>
//           {/* <Link href="/home" className="button"> LOG IN </Link> */}
//           <div className="forgot">
//             <Link href="" className="forgot-link">
//               Forgot password?
//             </Link>
//           </div>
//         </div>
//       </div>

//       <span className="end">
//         <a>Powered by</a>
//         <Link href="" className="tokens" target="_blank">
//           SuperTokens
//         </Link>
//       </span>
//     </div>
//   );
// };

// export default LoginForm;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../Components/Button";
// import Link from "../Components/Link";
// import Input from "../Components/Input";
// import "../CSS/styles.css";

// const LoginForm = () => {
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   return (
//     <div className="overall">
//       <div className="head">
//         <div className="sign-in">
//           <h2>Sign In</h2>
//         </div>
//         <div className="title">
//           <h4>Not registered yet?</h4>
//           <h4 className="sign-up">
//             <Link href="https://google.com" className="sign-up-link" target="_blank">
//               Sign Up
//             </Link>
//           </h4>
//         </div>
//       </div>

//       <span className="border"></span>

//       <div className="body">
//         <div className="email-box">
//           <label className="email-label">Email:</label>
//           <Input className="input email-input" type="text" placeholder="Email address" />
//         </div>

//         <div className="password-box">
//           <label className="password">Password:</label>
//           <Input className="input password-input" type="text" placeholder="Password" />
//         </div>

//         <div className="bottom">
//           {/* Use onClick directly to navigate to /home */}
//           <Button className="button" onClick={() => navigate("/home")}>
//             LOG IN
//           </Button>
//           <div className="forgot">
//             <Link href="" className="forgot-link">
//               Forgot password?
//             </Link>
//           </div>
//         </div>
//       </div>

//       <span className="end">
//         <a>Powered by</a>
//         <Link href="" className="tokens" target="_blank">
//           SuperTokens
//         </Link>
//       </span>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Link from "../Components/Link";
import Input from "../Components/Input";
import "../CSS/styles.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const returnHome = () => {
    console.log(email); // Debugging: check the value of email
    if (email === "1@gmail.com") {
      if(password === "123") {
        navigate("/home");
      } else {
        alert(`Password is wrong. Please check again!!!`);
      }
    } else {
      alert(`Email is wrong. Please check again!!!`);
    }
  };


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
        <div className="email-box">
          <label className="email-label">Email:</label>
          <Input
            className="input email-input"
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-box">
          <label className="password">Password:</label>
          <Input
            className="input password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="bottom">
          <Button className="button" onClick={returnHome}>
            LOG IN
          </Button>
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




