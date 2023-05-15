import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 text-xl font-medium shadow-xl bg-myteal font-oxygen text-myblack">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="inline-block py-2 mr-4  whitespace-nowrap"
              href="/"
            >
              Home
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
                  href="/features/sentiment"
                  scroll={false}
                >
                  <span className="ml-2">Sentiment</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 leading-snug hover:opacity-75"
                  href="/features/todo"
                  scroll={false}
                >
                  <span className="ml-2">Todo</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 leading-snug hover:opacity-75"
                  href="/features/lyrics"
                  scroll={false}
                >
                  <span className="ml-2">Lyrics</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
