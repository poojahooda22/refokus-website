import Hero from "@/components/Hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="w-full h-screen bg-primary text-secondary font-[satoshi_variable]">
      <Header/>
      <Hero />
    </main>
  );
}
