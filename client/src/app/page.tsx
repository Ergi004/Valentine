import { FloatingHearts } from "@/components/FloatingHearts/FloatingHearts";
import { HeroSection } from "@/components/Hero/Hero";
import { LoveLetter } from "@/components/LoveLetter/LoveLetter";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <FloatingHearts />
      <HeroSection />
      <LoveLetter />
      {/* Add more components as needed */}
    </main>
  );
}
