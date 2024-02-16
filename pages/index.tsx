import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Introduce from "@/components/Introduce";

import { useState } from "react";
const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div>
      {/* Mycontents */}
      <Introduce />
    </div>
  );
};

export default HomePage;
