import { useState, useRef, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showFeature, setShowFeature] = useState(false);

  return (
    <>
      <nav className="fixed top-0 flex flex-wrap items-center justify-between w-full px-2 py-3 mb-3 text-xl font-medium shadow-xl bg-myteal font-oxygen text-myblack">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link className="inline-block py-2 mr-4 whitespace-nowrap" href="/">
              Brando Bogar
            </Link>
            <button
              className="block px-3 py-1 bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
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
                        ? "absolute flex flex-col h-auto w-40 divide-y-2 bg-slate-50 justify-evenly items-center rounded-lg z-50 top-16 right-3 drop-shadow-2xl tablet:left-3 tablet:top-60 phone:left-3 phone:top-60"
                        : "hidden")
                    }
                  >
                    <li className="flex flex-col items-center justify-center w-full h-full p-2">
                      <Link href={"/features/lyrics"} className="w-full h-full">
                        Lyrics
                      </Link>
                    </li>
                    <li className="flex flex-col items-center justify-center w-full h-full p-2">
                      <Link
                        href={"/features/sentiment"}
                        className="w-full h-full"
                      >
                        Sentiment
                      </Link>
                    </li>
                    <li className="flex flex-col items-center justify-center w-full h-full p-2">
                      <Link href={"/features/todo"} className="w-full h-full">
                        Todo
                      </Link>
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
