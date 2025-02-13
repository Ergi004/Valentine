"use client";

import { HeartIcon } from "@heroicons/react/24/solid";

export const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <HeartIcon
          key={i}
          className="absolute text-valentine-pink opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}rem`,
            animation: `float ${Math.random() * 3 + 2}s infinite`,
          }}
        />
      ))}
    </div>
  );
};
