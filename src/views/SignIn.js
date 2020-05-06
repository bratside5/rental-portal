import React, { useCallback } from "react";
import { Redirect, Link } from "react-router-dom";
import app, { signInWithGoogle } from "../config/firebase";

import { useUser } from "../hooks";

function Login({ history }) {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const currentUser = useUser();

  if (currentUser) {
    return <Redirect to="/profile-dashboard" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
        <br />
        <button
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
      </form>
      <p className="text-center my-3">
        Don't have an account?{" "}
        <Link to="signUp" className="text-blue-500 hover:text-blue-600">
          Sign up here
        </Link>{" "}
        <br />{" "}
        <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
          Forgot Password?
        </Link>
      </p>
    </div>
  );
}

export default Login;
