import React from "react";
import profilePic from "../assets/profile-pic.jpg";

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
          <h1 className="display-4">Your Name</h1>
          <p className="lead">Short description about yourself</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
