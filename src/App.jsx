import React, { useRef } from "react";
import Nav from "./component/Nav";
import MainContent from "./component/MainContent";

function App() {
const overviewRef=useRef(null);
const authRef=useRef(null);
const tutorialRef=useRef(null);
const endpointRef=useRef(null);
const priceRef=useRef(null);
const codeRef=useRef(null);
const scrollToOverview=()=>{
  overviewRef.current.scrollIntoView({behavior:"smooth"})
}
const scrollToAuth=()=>{
  authRef.current.scrollIntoView({behavior:"smooth"})
}
const scrollToTutorial=()=>{
  tutorialRef.current.scrollIntoView({behavior:"smooth"})
}
const scrollToEndpoint=()=>{
  endpointRef.current.scrollIntoView({behavior:"smooth"})
}
const scrollToPrice=()=>{
  priceRef.current.scrollIntoView({behavior:"smooth"})
}
const scrollToCode=()=>{
  codeRef.current.scrollIntoView({behavior:"smooth"})
}
   
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
      <Nav scrollToOverview={scrollToOverview} scrollToAuth={scrollToAuth} scrollToTutorial={scrollToTutorial} scrollToEndpoint={scrollToEndpoint} scrollToPrice={scrollToPrice} scrollToCode={scrollToCode} />
      <MainContent overviewRef={overviewRef} authRef={authRef} tutorialRef={tutorialRef} endpointRef={endpointRef} priceRef={priceRef} codeRef={codeRef}/>
    </div>
  );
}

export default App;
