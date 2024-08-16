import React from "react";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <div
        className="w-full h-[20vh] flex flex-col items-center justify-center bg-blue-500"
        style={{ backgroundColor: "#6366f1" }}
      >
        <h1 className="text-5xl font-bold text-white text-center">
          Book Generator API
        </h1>
      </div>
      <Nav/>
    </div>
  );
}

export default App;
