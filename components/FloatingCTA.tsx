"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:hidden">
      <a
        href="tel:0600411104"
        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl transition-all hover:scale-105"
      >
        📞 Soita nyt
      </a>
    </div>
  );
}
