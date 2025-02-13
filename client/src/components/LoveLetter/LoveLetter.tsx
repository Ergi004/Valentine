"use client";

import { useState } from "react";

export const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-valentine-light rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <button className="w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="font-cursive text-4xl text-valentine-red mb-4">
          Click to Open My Heart
        </h2>
      </button>
      {isOpen && (
        <div className="mt-4 space-y-4 text-valentine-dark">
          <p className="text-lg">My Dearest,</p>
          <p className="text-lg">
            Every moment with you feels like a beautiful dream...
          </p>
          {/* Add more romantic text */}
        </div>
      )}
    </div>
  );
};
