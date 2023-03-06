import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import MovieComponent from "./MovieComponent";

const Form = () => {
  const [show, setshow] = useState(false);
  const ShowData = () => {
    if (show == false) setshow(true);
  };
  return (
    <div className="main">
      <div className="login_form">
        <div className="login">
          <h1>Login</h1>
        </div>
        <div className="login_con">Enter your detail below to continue</div>
        <input
          class="name"
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          class="password"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <button className="login_btn" type="submit" onClick={ShowData}>
          Login
        </button>
      </div>
      {show && (
        <div className="Container">
          <MovieComponent />
        </div>
      )}
    </div>
  );
};

export default Form;
