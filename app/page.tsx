"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setServerError("");
    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Enter a valid email");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    if (!isValid) return;
    try {
      const res = await axios.post(
        "http://nextjs-api.in/api/adminlogin",
        { email, password },
        { withCredentials: true }
      );
      if (res.data.status) {
        router.push("/dashboard");
      } else {
        setServerError(res.data.message || "Invalid credentials");
      }
    } catch (err: any) {
      setServerError("Invalid email or password");
    }
  };
  return (
    <>
      <div className="navbar navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <a className="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
              <i className="icon-reorder shaded"></i>
            </a>
            <a className="brand" href="index.html">
              Edmin
            </a>
            <div className="nav-collapse collapse navbar-inverse-collapse">
              <ul className="nav pull-right">
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Forgot your password?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="module module-login span4 offset4">
              <form className="form-vertical" onSubmit={handleLogin}>
                <div className="module-head">
                  <h3>Sign In</h3>
                </div>
                <div className="module-body">
                  {serverError && (
                    <div style={{ color: "red", marginBottom: "10px" }}>
                      {serverError}
                    </div>
                  )}
                  <div className="control-group">
                    <div className="controls row-fluid">
                      <input
                        className="span12"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                      />
                      {emailError && (
                        <small style={{ color: "red" }}>{emailError}</small>
                      )}
                    </div>
                  </div>

                  <div className="control-group">
                    <div className="controls row-fluid">
                      <input
                        className="span12"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                      {passwordError && (
                        <small style={{ color: "red" }}>{passwordError}</small>
                      )}
                    </div>
                  </div>
                </div>

                <div className="module-foot">
                  <div className="control-group">
                    <div className="controls clearfix">
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Login
                      </button>
                      <label className="checkbox">
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <b className="copyright">
            &copy; 2026 Edmin - EGrappler.com
          </b>{" "}
          All rights reserved.
        </div>
      </div>
    </>
  );
}