import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { setShowLogin, axios, setToken } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
    // TODO: Add API call or validation logic here
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center mt-24 pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 pointer-events-auto"
        onClick={() => setShowLogin(false)}
      ></div>

      {/* Login Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 w-full max-w-md bg-white rounded-lg shadow-xl p-6 pointer-events-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-2">Sign in</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Welcome back! Please sign in to continue.
        </p>

        <form onSubmit={onSubmitHandle} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-full text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-full text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-between text-sm text-gray-500">
            <label>
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <a href="#" className="underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-full"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don’t have an account?{" "}
          <a className="text-indigo-500 hover:underline" href="#">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
