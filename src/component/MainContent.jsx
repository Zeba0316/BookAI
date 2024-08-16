import React from "react";
import { useState } from "react";

const MainContent = ({
  overviewRef,
  authRef,
  tutorialRef,
  endpointRef,
  priceRef,
  codeRef
}) => {
  const [showKey, setShowKey] = useState(false);
  const [key, setKey] = useState("");

  const generateRandomKey = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    const keyLength = 40;
    let randomKey = "";

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

  const tableData = [
    {
      parameter: "Api",
      type: "string",
      description: 'The API provider to use. Options: "openai" or "together"',
    },
    {
      parameter: "model",
      type: "string",
      description:
        'The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")',
    },
    {
      parameter: "topic",
      type: "string",
      description: "The main topic or theme of the book",
    },
    {
      parameter: "language",
      type: "string",
      description: "The language in which the book should be generated",
    },
    {
      parameter: "word_count",
      type: "integer",
      description: "The approximate number of words for the generated book",
    },
  ];

  const apiData = [
    {
      API: "OpenAI",
      MODEL: "GPT-3.5",
      PRICE_PER_1K_TOKENS: "$0.002",
    },
    {
      API: "OpenAI",
      MODEL: "GPT-4",
      PRICE_PER_1K_TOKENS: "$0.03",
    },
    {
      API: "Together AI",
      MODEL: "Llama-2-70b",
      PRICE_PER_1K_TOKENS: "$0.0008",
    },
    {
      API: "Together AI",
      MODEL: "Llama-2-13b",
      PRICE_PER_1K_TOKENS: "$0.0006",
    },
  ];
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
            <p className="text-white text-xl">
              Your API Key: <span className="font-bold">{key}</span>
            </p>
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
        <h2 className="text-3xl text-[#a4b3fb] font-medium" ref={authRef}>
          Authentication
        </h2>
      </div>
      {/* end authentication */}

      {/* endpoint */}
      <div className="min-h-[90vh] w-[65%] bg-[#1e293b] rounded-lg border-2 border-[rgba(255,255,255,0.1)] p-8 pt-20 flex flex-col-reverse gap-10">
        <div className="w-[98%] h-[18vh] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg">
          <img
            src="./assets/response.png"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <h2 className="text-2xl text-[#a4b3fb] font-medium">Response</h2>

        <div className="flex justify-center">
          <table className="min-w-full border-collapse bg-[#1e293b] rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-[#6366f1] text-white">
              <tr>
                <th className="py-3 px-6 text-left text-xl">Parameter</th>
                <th className="py-3 px-6 text-left text-xl">Type</th>
                <th className="py-3 px-6 text-left text-xl">Description</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[rgba(255,255,255,0.1)]"
                >
                  <td className="py-5 px-6 text-white font-medium text-xl">
                    <span className="text-[#22d3ee]">{row.parameter}</span>
                  </td>
                  <td className="py-5 px-6 text-white font-medium text-xl">
                    {row.type}
                  </td>
                  <td className="py-5 px-6 text-white font-medium text-xl">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl text-[#a4b3fb] font-medium">Request Body</h2>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-[#a4b3fb] font-medium">Generate Book</h2>
          <div className="flex gap-8 items-center">
            <button className="w-[fit-content] h-[5vh] rounded-lg bg-[#22d3ee] text-center flex items-center justify-center font-bold px-[2vh] py-[2vh] text-xl">
              Post
            </button>
            <button className="w-[fit-content] h-[5vh] rounded-lg bg-[#6366f1] text-center flex items-center justify-center font-bold px-[2vh] py-[2vh] text-xl text-white">
              /api/generate-book
            </button>
          </div>
        </div>
        <h2 className="text-3xl text-[#a4b3fb] font-medium" ref={endpointRef}>
          Endpoints
        </h2>
      </div>
      {/* end endpoint */}

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
        <h2 className="text-3xl text-[#a4b3fb] font-medium" ref={tutorialRef}>
          Tutorial
        </h2>
      </div>
      {/* end tutorial */}

      {/* code example */}
      <div className="min-h-[90vh] w-[65%] bg-[#1e293b] rounded-lg border-2 border-[rgba(255,255,255,0.1)] p-8 pt-20 flex flex-col gap-10">
        <h1  className="text-3xl text-[#a4b3fb] font-medium" ref={codeRef}>Code Examples</h1>
        <div>
          <h2 className="text-2xl text-[#a4b3fb] font-medium">Python</h2>
          <div className="w-[98%] h-[18vh] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg">
          <img
            src="./assets/python.png"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        </div>
        <div>
          <h2 className="text-2xl text-[#a4b3fb] font-medium">Javascript (Node.js)</h2>
          <div className="w-[98%] h-[18vh] br-8 border-2 border-[rgba(255,255,255,0.1)] rounded-lg">
          <img
            src="./assets/js.png"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        </div>
      </div>
      {/* end code example */}

      {/* pricing */}
      <div className="h-[90vh] w-[65%] bg-[#1e293b] rounded-lg border-2 border-[rgba(255,255,255,0.1)] p-10  flex flex-col pt-20 gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl text-[#a4b3fb] font-medium" ref={priceRef}>
            API Pricing
          </h1>
          <p className="text-white text-xl">
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </p>
        </div>
        <div className="flex justify-center">
          <table className="min-w-full border-collapse bg-[#1e293b] rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-[#6366f1] text-white">
              <tr>
                <th className="py-3 px-6 text-left text-xl">API</th>
                <th className="py-3 px-6 text-left text-xl">MODEL</th>
                <th className="py-3 px-6 text-left text-xl">
                  PRICE PER 1K TOKENS
                </th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[rgba(255,255,255,0.1)]"
                >
                  <td className="py-5 px-6 text-white font-medium text-xl">
                    {row.API}
                  </td>
                  <td className="py-5 px-6 text-white font-medium text-xl">
                    {row.MODEL}
                  </td>
                  <td className="py-5 px-6 text-white font-medium text-xl">
                    {row.PRICE_PER_1K_TOKENS}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl text-[#a4b3fb] font-medium">Billing</h2>
          <p className="text-white text-xl">
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl text-[#a4b3fb] font-medium">
            Token Estimation
          </h2>
          <p className="text-white text-xl">
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
        </div>
      </div>
      {/* end pricing */}
    </div>
  );
};
export default MainContent;
