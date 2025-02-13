import { FloatingHearts } from "@/components/FloatingHearts/FloatingHearts";
import { HeroSection } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <HeroSection />
      <FloatingHearts />
      {/* Add more components as needed */}
    </main>
  );
}
