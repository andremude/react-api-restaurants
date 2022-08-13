import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignIn({ onUpdateUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

 function handleSubmit(e) {
    e.preventDefault();
     fetch("http://localhost:3000/api/v1/sign_in", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body:  JSON.stringify(formData),
    })
     .then((r) => {
        if (!r.ok) throw Error("Incorrect username or password!")
        .then(alert("Incorrect username or password!"))
        .then(navigate('/login'))
        return r.json();
      })
      .then((user) => onUpdateUser(user))
      .then(navigate('/'))
      // .then(window.location.reload())
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label>Email</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button type="submit" className="login-btn">Sign In</button>
        <p>Don't have an account? <Link to="/sign_up"><b>Sign Up</b></Link></p>
      </form>
    </div>
  );
}

export default SignIn;
