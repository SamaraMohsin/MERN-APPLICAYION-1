import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import Navbar from "./Navbar";

function Homepage({ setLoginUser }) {
  const navigate = useNavigate();
  const formPage = () => {
    navigate("/Form");
  };

  return (
    <>
      <Navbar title={"Posifects"} aboutText="About" />
      <div className="homepage">
        <p
        // style={{
        //   width: "100%",
        //   content: "justify",
        //   alignItems: "center",
        //   height: "100%",
        // }}
        >
          The posifect platform was created to track and log both the negative
          and beneficial side effacts of treatments for a wide range of health
          conditions and to facilitate overall well being. PLease complete
          following form to register your effacts.
        </p>
        <button className="button" onClick={formPage}>
          Fill Form
        </button>
        <div className="button " onClick={() => setLoginUser({})}>
          logout
        </div>
      </div>
    </>
  );
}

export default Homepage;
