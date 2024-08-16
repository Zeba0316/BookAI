import React from "react";

const Nav = ({scrollToOverview, scrollToAuth, scrollToTutorial}) => {
  return (
    <div className=" w-full min-h-[10vh] flex flex-col items-center justify-center bg-[#1e293b] gap-8 py-5 md:flex-row ">
      <p className="text-white text-xl font-medium hover:text-[#22d3ee] transition-colors duration-250 cursor-pointer" onClick={scrollToOverview}>OVERVIEW</p>
      <p className="text-white text-xl font-medium hover:text-[#22d3ee] transition-colors duration-250 cursor-pointer" onClick={scrollToAuth}>AUTHENTICATION</p>
      <p className="text-white text-xl font-medium hover:text-[#22d3ee] transition-colors duration-250 cursor-pointer">ENDPOINTS</p>
      <p className="text-white text-xl font-medium hover:text-[#22d3ee] transition-colors duration-250 cursor-pointer" onClick={scrollToTutorial}>TUTORIAL</p>
      <p className="text-white text-xl font-medium hover:text-[#22d3ee] transition-colors duration-250 cursor-pointer">CODE EXAMPLES</p>
      <p className="text-white text-xl font-medium hover:text-[#22d3ee] transition-colors duration-250 cursor-pointer">PRICING</p>
    </div>
  );
};

export default Nav;
