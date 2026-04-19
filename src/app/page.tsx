"use client";
import React, { useState } from "react";
import DesignOne from "../components/DesignOne";
import DesignThree from "../components/DesignThree";
import DesignFour from "../components/DesignFour"; // import အသစ်
import DesignFive from "../components/DesignFive"; // import အသစ်
import DesignSeven from "../components/DesignSeven"; // New
import DesignEight from "../components/DesignEight"; // New

export default function Home() {
  const [design, setDesign] = useState(1);

  return (
    <main className="relative min-h-screen w-full">
      {/* FLOATING NAVIGATION - Fixed for Phone */}
      <div className="fixed inset-x-0 bottom-10 md:inset-0 z-9999 flex items-center justify-center pointer-events-none px-4">
        <div className="flex flex-wrap justify-center gap-2 p-3 bg-black/70 backdrop-blur-md rounded-4xl pointer-events-auto border border-white/10 shadow-2xl max-w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <button
              key={num}
              onClick={() => setDesign(num)}
              className={`w-9 h-9 md:w-12 md:h-12 rounded-full font-black text-[10px] md:text-lg transition-all duration-300 ${
                design === num 
                ? "bg-white text-black scale-110 shadow-lg" 
                : "bg-zinc-800 text-white opacity-40 hover:opacity-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">
        {design === 1 && <DesignOne />}
        {design === 3 && <DesignThree />}
        {design === 4 && <DesignFour />}
        {design === 5 && <DesignFive />}
        {design === 7 && <DesignSeven />}
        {design === 8 && <DesignEight />}
      </div>
    </main>
  );
}