//! komponen navbar boiler

import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavDump({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [showFeature, setShowFeature] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full flex flex-wrap items-center justify-between px-2 py-3 bg-myteal mb-3 font-oxygen text-myblack text-xl font-medium shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="  inline-block mr-4 py-2 whitespace-nowrap  "
              href="/"
            >
              Brando Bogar
            </Link>
            <button
              className=" cursor-pointer -none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex text-lg" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center    leading-snug  hover:opacity-75"
                  href="#project"
                  scroll={false}
                >
                  <span className="ml-2">Project</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center    leading-snug  hover:opacity-75"
                  href="#resume"
                  scroll={false}
                >
                  <span className="ml-2">Resume</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center    leading-snug  hover:opacity-75"
                  href="#about"
                  scroll={false}
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center    leading-snug  "
                  onClick={() => setShowFeature(!showFeature)}
                >
                  <span className="ml-2">Features</span>
                  <ul
                    className={
                      " text-xl " +
                      (showFeature
                        ? "absolute flex flex-col h-auto w-40 divide-y-2 bg-slate-50 justify-evenly items-center rounded-lg z-50 top-16 right-1 shadow-2xl"
                        : "hidden")
                    }
                  >
                    <li className="flex flex-col justify-center items-center  w-full p-2">
                      <Link href={"/features/lyrics"}>Lyrics</Link>
                    </li>
                    <li className="flex flex-col justify-center items-center  w-full p-2">
                      <Link href={"/features/sentiment"}>Sentiment</Link>
                    </li>
                    <li className="flex flex-col justify-center items-center  w-full p-2">
                      <Link href={"/features/todo"}>Todo</Link>
                    </li>
                  </ul>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
