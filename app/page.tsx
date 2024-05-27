import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full h-screen bg-zinc-900 text-white font-[satoshi_variable]">
      <Navbar />
      <Hero />
    </main>
  );
}
