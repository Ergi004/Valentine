"use client";
import { LoveLetter } from "../LoveLetter/LoveLetter";

export const HeroSection = () => {
  return (
    <section className="text-center py-20 relative z-10 w-full h-full">
      <div>
        <h1 className="font-cursive text-6xl md:text-8xl text-valentine-red mb-4 animate-float">
          Happy Valentine&apos;s Day!
        </h1>
        <p className="text-2xl text-valentine-dark">
          My Love for You Grows Every Day ❤️
        </p>
      </div>
      <LoveLetter />
    </section>
  );
};
