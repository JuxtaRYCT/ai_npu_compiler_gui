import React, { useState } from "react";
import {
  doSignInWithGoogle,
  doSignInWithEmailPassword,
} from "../firebase/auth";
import { useAuth } from "../context/authContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import iithlogowhite from "../assets/iithlogowhite.png";
import backarrow from "../assets/arrow-left.svg";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailPassword(email, password);
      } catch (err) {
        setErrorMessage("Failed to sign in with email and password");
        setIsSigningIn(false);
      }
    }
  };

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (err) {
        setErrorMessage("Failed to sign in with Google");
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div>
      <div className="  absolute">
        <div className="">
          <img src={iithlogowhite} alt="" className="w-[200px]" />
        </div>
      </div>

      {userLoggedIn && <Link to={"/home"} replace={true} />}
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-white">
            Sign in to your account
          </h2>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 text-gray-200 bg-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 text-gray-200 bg-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 bg-gray-900 border-gray-700 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-500 hover:text-indigo-400"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
              <button
                type="button"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-md group hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={goToDashboard}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8c0-17.8-1.4-35.2-4-52.2H249.2v98.5h134.7c-5.8 31.1-23.4 57.4-49.8 74.9v62.3h80.3c47.3-43.5 74.6-107.6 74.6-183.5zM249.2 496c67.1 0 123.1-22.2 164.1-60.2l-80.3-62.3c-22.2 15-50.6 24-83.8 24-64.4 0-119.1-43.5-138.7-102.1H28.6v63.9c40.6 79.8 124.7 137.1 220.6 137.1zM110.5 301.3c-9.5-28.1-9.5-58.5 0-86.6V151.2H28.6C-9.5 198.2-9.5 309.8 28.6 356.8h81.9v-55.5zM249.2 96c35.5 0 67.3 12.3 92.5 32.6l69.2-69.2C363.5 21.6 308.5 0 249.2 0 153.3 0 69.2 57.3 28.6 137.1l81.9 63.9c19.6-58.6 74.3-102.1 138.7-102.1z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
