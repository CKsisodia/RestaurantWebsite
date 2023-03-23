import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  forgotPasswordAction,
  logInUserAction,
} from "../../../reducer/asyncUserReducer";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupHandler = () => {
    navigate("/signup");
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const userLogInData = useSelector((state) => state.user.userLogInData);
  console.log(userLogInData);

  useEffect(() => {
    if (userLogInData !== undefined) {
      navigate("/");
    }
  }, [userLogInData]);

  const emailLogInHandler = (event) => {
    event.preventDefault();
    setEnteredEmail(event.target.value);
  };
  const passwordLogInHandler = (event) => {
    event.preventDefault();
    setEnteredPassword(event.target.value);
  };
  const LogInHanndler = (event) => {
    event.preventDefault();
    if (!enteredEmail || !enteredPassword) {
      alert("enter data");
      return;
    } else {
      dispatch(
        logInUserAction({
          email: enteredEmail,
          password: enteredPassword,
        })
      );
    }
  };

  const forgotHandler = (event) => {
    event.preventDefault();
    console.log("1", enteredEmail);
    dispatch(
      forgotPasswordAction({
        email: enteredEmail,
      })
    );
    setEnteredEmail("");
  };

  return (
    <div>
      <div className="body_login">
        <div className="container_login" id="container">
          <div className="form-container_login log-in-container_1">
            <form className="form_login">
              <h1>Login</h1>
              <input
                type="email"
                placeholder="Email"
                value={enteredEmail}
                onChange={emailLogInHandler}
              />
              <input
                type="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={passwordLogInHandler}
              />
              <p
                onClick={forgotHandler}
                style={{ cursor: "pointer", color: "red", fontWeight: "700" }}
              >
                Forgot your password?
              </p>
              <button onClick={LogInHanndler} className="loginButton">
                Log In
              </button>
              <div className="newUser">
                <p>New to Food Yog?</p>
                <div className="create_account" onClick={signupHandler}>
                  Create Account
                </div>
              </div>
            </form>
          </div>
          <div className="overlay-container_login">
            <div className="overlay_login">
              <div className="overlay-panel_login overlay-right_login">
                <h1>Welcome! to Login Form</h1>
                <p>Please Enter Your Details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
