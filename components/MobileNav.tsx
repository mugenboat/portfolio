import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function MobileNav(props: {
  nav: boolean;
  closeNav: () => void;
}) {
  const navAnimation = props.nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link className="nav-link-mobile" href="/" onClick={props.closeNav}>
          Home
        </Link>
        <Link
          className="nav-link-mobile"
          href="/projects"
          onClick={props.closeNav}
        >
          Projects
        </Link>
        <Link
          className="nav-link-mobile"
          href="/video"
          onClick={props.closeNav}
        >
          Video
        </Link>
      </div>
      <div
        onClick={props.closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300"
      >
        <XMarkIcon />
      </div>
    </div>
  );
}
