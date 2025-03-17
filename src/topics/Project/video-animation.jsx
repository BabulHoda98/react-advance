import { useState } from 'react';

export default function Animation() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8">
      {/* Animation Container */}
      <div className="w-40 h-64 bg-white rounded-xl shadow-lg relative overflow-hidden">
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500 rounded-full 
          ${animate ? 'animate-slide' : 'top-0'} 
          transition-all duration-300`}
        />
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setAnimate(true)}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Start
        </button>
        <button
          onClick={() => setAnimate(false)}
          className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Stop
        </button>
      </div>
    </div>
  );
}