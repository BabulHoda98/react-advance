import React, { useState } from "react";

const AnimatedBar = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStart = () => {
    setIsAnimating(true);
  };

  const handleStop = () => {
    setIsAnimating(false);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <header className="w-full p-4 shadow-md relative overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transition-all duration-500 shadow-md ${
            isAnimating ? "animate-marquee" : ""
          }`}
        ></div>
      </header>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Stop
        </button>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-marquee {
            animation: marquee 3s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBar;
