import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="card">

        {/* Tabs */}
        <div className="tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="form">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />

          {!isLogin && (
            <>
              <label>Confirm Password:</label>
              <input type="password" placeholder="Confirm password" />
            </>
          )}

          {isLogin && <p className="forgot">Forgot password?</p>}

          <button className="submit-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;