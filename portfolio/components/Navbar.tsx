import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar(props: { openNav: () => void }) {
  return (
    <div className="w-[100%] top-0 h-[10vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          THANATE
          <span className="text-green-300">PORTFOLIO</span>
        </h1>
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <div onClick={props.openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
}
