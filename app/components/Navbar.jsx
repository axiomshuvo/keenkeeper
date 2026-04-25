"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "../ui/MenuIcon";

export default function Navbar() {
  const pathname = usePathname();
  const navLink = (
    <>
      <li
        className={
          pathname === "/" ? "bg-teal-900 text-white rounded-lg  " : ""
        }
      >
        <Link href="/">Home</Link>
      </li>
      <li className={pathname === "/timeline" ? "bg-teal-900 text-white" : ""}>
        <Link href="/timeline">Timeline</Link>
      </li>
      <li className={pathname === "/stats" ? "bg-teal-900 text-white" : ""}>
        <Link href="/stats">Stats</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MenuIcon />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          Keen<span className="text-teal-800">Kepper</span>{" "}
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
}
