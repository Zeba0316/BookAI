import React from "react";
import { useState } from "react";

const MainContent = ({ overviewRef, authRef, tutorialRef }) => {
  const [showKey, setShowKey] = useState(false);
  const [key,setKey]=useState("");

  const generateRandomKey = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const keyLength = 40; 
    let randomKey = '';
  
    for (let i = 0; i < keyLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomKey += characters[randomIndex];
    }
  
    return randomKey;
  };
  
  const generateKey = () => {
    const newKey = generateRandomKey();
    setShowKey(true);
    setKey(newKey);
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#0f172a] py-10 gap-10">
      {/* overview */}
      <div className="h-[25vh] w-[65%] bg-[#1e293b] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg p-8 flex flex-col-reverse gap-2">
        <p className="text-white text-xl">
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </p>
        <h2 className="text-3xl text-[#a4b3fb] font-medium" ref={overviewRef}>
          Overview
        </h2>
      </div>
      {/* end overview */}
      {/* authentication */}
      <div className="min-h-[50vh] w-[65%] bg-[#1e293b] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg p-8 flex flex-col-reverse gap-4">
        {showKey ? (
          <div
            className={`w-[98%] h-[8vh] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg flex items-center pl-5 transition-all duration-300 ease-in-out`}
          >
            <p className="text-white text-xl">Your API Key: <span className="font-bold">{key}</span></p>
          </div>
        ) : (
          <div
            className={`w-[98%] h-[4vh] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg flex items-center pl-5 transition-all duration-300 ease-in-out`}
          ></div>
        )}
        <button
          className="w-[20%] h-[5.6vh] br-3 border-2 bg-[#22d3ee] rounded-lg border-none text-center font-bold px-[2vh] py-[1vh] text-xl  hover:bg-[#1e3a8a] hover:-translate-y-1 transition duration-200 ease-in-out"
          onClick={generateKey}
        >
          Generate API Key
        </button>
        <p className="text-white text-xl">
          To generate an API key, use the button below:
        </p>
        <div className="w-[98%] h-[8vh] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg">
          <p className="w-[fit-content] h-[7.7vh] br-8 border-2 border-[rgba(255,255,255,0.1)] ml-7 rounded-lg text-center text-white px-[2vh] py-[2vh] text-xl">
            X-API-Key: YOUR_API_KEY
          </p>
        </div>
        <p className="text-white text-xl">
          To use the API, you need to include your API key in the header of each
          request:
        </p>
        <h2 className="text-3xl text-[#a4b3fb] font-medium" ref={authRef}>Authentication</h2>
      </div>
      {/* end authentication */}
      {/* tutorial */}
      <div className="h-[65vh] w-[65%] bg-[#1e293b] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg p-8 flex flex-col-reverse gap-10">
        <div>
          <h3 className="text-2xl text-[#a4b3fb] font-medium">
            Step 4: Retrieve the Generated Book
          </h3>
          <p className="text-white text-xl">
            Once the job is complete, you can retrieve the generated book using
            the job ID (endpoint to be implemented).
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-[#a4b3fb] font-medium">
            Step 3: Handle the Response
          </h3>
          <p className="text-white text-xl">
            The API will return a response with a job ID. You can use this ID to
            check the status of your book generation job.
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-[#a4b3fb] font-medium">
            Step 2: Make a Request
          </h3>
          <p className="text-white text-xl">
            Use your preferred programming language or tool to make a POST
            request to the /api/generate-book endpoint. Include your API key in
            the header and the required parameters in the request body.
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-[#a4b3fb] font-medium">
            Step 1: Obtain an API Key
          </h3>
          <p className="text-white text-xl">
            Generate an API key using the button in the Authentication section
            above.
          </p>
        </div>
        <h2 className="text-3xl text-[#a4b3fb] font-medium" ref={tutorialRef}>Tutorial</h2>
      </div>
      {/* end tutorial */}
    </div>
  );
};

export default MainContent;
