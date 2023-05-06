import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <h1>Welcome to my website</h1>
      <p>Here is some content for my website.</p>
    </div>
  );
}

export default App;
