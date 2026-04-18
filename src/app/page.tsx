"use client";
import React, { useState } from "react";
import DesignOne from "../components/DesignOne";
import DesignTwo from "../components/DesignTwo";
import DesignThree from "../components/DesignThree"; // Add this

export default function Home() {
  const [design, setDesign] = useState(1);

  return (
    <main className="relative min-h-screen w-full">
      {/* FLOATING NAVIGATION - DEAD CENTER */}
      <div className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none">
        <div className="flex gap-4 p-4 bg-black/60 backdrop-blur-md rounded-3xl pointer-events-auto border border-white/10 shadow-2xl">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setDesign(num)}
              className={`w-14 h-14 rounded-2xl font-black text-xl transition-all duration-300 ${
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

      {/* RENDER DESIGNS */}
      <div className="w-full">
        {design === 1 && <DesignOne />}
        {design === 2 && <DesignTwo />}
        {design === 3 && <DesignThree />}
      </div>
    </main>
  );
}