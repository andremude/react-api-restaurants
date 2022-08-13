import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp({ onUpdateUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/sign_up", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((user) => onUpdateUser(user));
  }

  const { email, password } = formData;

  return (
  <div className="signup-container">
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <label>Email</label>
      <input
        type="email"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
      />

      <button type="submit" className="signup-btn">Sign Up</button>
      <p>Already have an account? <Link to="/sign_in"><b>Sign In</b></Link></p>
    </form>
  </div>
  );
}

export default SignUp;
