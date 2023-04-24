import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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
                <Link
                  className="px-3 py-2 flex items-center    leading-snug  hover:opacity-75"
                  href="/features"
                  scroll={false}
                >
                  <span className="ml-2">Features</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
