import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavDump({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [showFeature, setShowFeature] = React.useState(false);
  return (
    <>
      <nav className="fixed flex flex-wrap items-center justify-between w-full px-2 py-3 mb-3 text-xl font-medium shadow-xl bg-myteal font-oxygen text-myblack top-0">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="inline-block py-2 mr-4  whitespace-nowrap"
              href="/"
            >
              Brando Bogar
            </Link>
            <button
              className="block px-3 py-1 bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer  -none lg:hidden focus:outline-none"
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
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto ">
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 leading-snug hover:opacity-75"
                  href="#project"
                  scroll={false}
                >
                  <span className="ml-2">Project</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 leading-snug hover:opacity-75"
                  href="#resume"
                  scroll={false}
                >
                  <span className="ml-2">Resume</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 leading-snug hover:opacity-75"
                  href="#about"
                  scroll={false}
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="flex items-center px-3 py-2 leading-snug "
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
                    <li className="flex flex-col items-center justify-center w-full p-2">
                      <Link href={"/features/lyrics"}>Lyrics</Link>
                    </li>
                    <li className="flex flex-col items-center justify-center w-full p-2">
                      <Link href={"/features/sentiment"}>Sentiment</Link>
                    </li>
                    <li className="flex flex-col items-center justify-center w-full p-2">
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
