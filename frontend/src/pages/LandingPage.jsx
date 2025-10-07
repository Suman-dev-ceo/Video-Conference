import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="LandingPageContainer">
      <nav>
        <div className="NavHeader">
          <h2>Apna Video Call</h2>
        </div>
        <div className="NavList">
          <p onClick={() => navigate("/random")}>Join as Guest</p>
          <p onClick={() => navigate("/auth")}>Register</p>
          <div role="button" onClick={() => navigate("/auth")}>
            Login
          </div>
        </div>
      </nav>
      <div className="LandingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#ff9839" }}>Connect</span> with your loved
            ones
          </h1>
          <p>Cover a distance by apna video call</p>
          <div role="button">
            <Link to={"/auth"}>Get started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="mobilePhoto" />
        </div>
      </div>
    </div>
  );
}
