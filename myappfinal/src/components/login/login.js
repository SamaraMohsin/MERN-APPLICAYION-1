import axios from "axios";
import React from "react";
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:3001/login", user)
      // .then((res) => console.log(res.data.message))
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="login">
        {console.log(user)}
        <img src="../Data/images/LOGO2.png" alt="" />
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter your Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </>
  );
};

export default Login;
