"use client";

import { useState } from "react";
import { Menuoverlay } from "./Menuoverlay";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header id="home" className="flex items-center justify-between bg-black p-4 text-white">
        <img src="/assets/logo.png" href="/" alt="Logo" className="h-12 w-auto" />
        <nav aria-label="Hovedmenu" className="hidden items-center gap-8 md:flex pr-10">
          <a href="/">HOME</a>
          <a href="/eventsdetail">EVENTS</a>
          <a href="/eventspage">BOOK TABLE</a>
          <a href="/contactpage">CONTACT US</a>
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded md:hidden"
          aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>
      </header>

      <Menuoverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;
