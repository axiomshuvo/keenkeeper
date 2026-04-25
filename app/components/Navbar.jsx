"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import homeIcon from "../../assets/home-icon.png";
import logoImg from "../../assets/logo.png";
import statsIcon from "../../assets/stats-icon.png";
import timelineIcon from "../../assets/timeline-icon.png";
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
        <Link href="/">
          <Image src={homeIcon} alt="home icon" height={16} width={16} /> Home
        </Link>
      </li>
      <li
        className={
          pathname === "/timeline" ? "bg-teal-900 text-white rounded-lg " : ""
        }
      >
        <Link href="/timeline">
          <Image
            src={timelineIcon}
            alt="timeline icon"
            height={16}
            width={16}
          />
          Timeline
        </Link>
      </li>
      <li
        className={
          pathname === "/stats" ? "bg-teal-900 text-white rounded-lg " : ""
        }
      >
        <Link href="/stats">
          <Image src={statsIcon} alt="stats icon" height={16} width={16} />
          Stats
        </Link>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100  shadow-sm">
      <div className="navbar max-w-[90%] mx-auto">
        <div className="navbar-start ">
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
            <Image src={logoImg} alt="Keen Keeper Logo" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">{navLink}</ul>
        </div>
      </div>
    </div>
  );
}
