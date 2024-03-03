import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Introduce from "@/components/Introduce";

import { ReactNode } from "react";

import { useState } from "react";

type layoutprops = {
  children: ReactNode;
};

export default function Layout({ children }: layoutprops) {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-cover bg-center bg-[#19222e]">
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
