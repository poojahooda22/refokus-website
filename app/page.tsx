
'use client'
import Hero from "@/components/Hero";
import Cursor from "@/components/StickyCursor/Index";
import Header from "@/components/header/Index";
import { useRef,  useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  const stickyElement = useRef(null);
  return (
    <main className="w-full h-screen bg-primary text-secondary font-[satoshi_variable]">
      <Header ref={stickyElement} />
      <Cursor stickyElement={stickyElement} />
      <Hero />
    </main>
  );
}
