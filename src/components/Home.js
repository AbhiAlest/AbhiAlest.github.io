import React from "react";
import profilePic from "../assets/profile-pic.png";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 order-md-2">
          <img
            src={profilePic}
            alt="Your Name"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h1 className="display-4">AbhiAlest</h1>
          <p className="lead">A Diligent Front-End Dev</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
