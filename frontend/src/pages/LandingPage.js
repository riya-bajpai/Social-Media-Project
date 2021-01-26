import React from "react";
import successity from "../successity.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">Welcome in</p>
          <span>Social Site! </span>
        </div>

        <div className="text-section font__p p__size">
          It is a platform where u can get connected with your friends and families
          <br />
          If You are looking for your lost friends , you have come to right place:
          <ul>
            <li>How to get connected?</li>
            <li>How to grow your friendcircle ?</li>
            <li>How to improve yourself every day</li>
            <li>or You just want to share Your story</li>
          </ul>
          <div className="text-button-wrapper">
            <Link to="/register">Register in</Link> and add post!
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={successity} className="landing-image" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
