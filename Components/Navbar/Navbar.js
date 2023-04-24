// !Komponen tidak di pakai

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNavbar = () => {
    setIsOpen(true);
    console.log(setIsOpen);
  };

  return (
    <header>
      <nav id="top">
        <div className=" flex flex-row bg-myteal w-screen top-0 fixed h-20 text-myblack text-xl shadow-2xl phone:flex-col  tablet:flex-row">
          <div className=" flex w-1/2 h-full justify-start items-center pl-8 phone:items-center phone:justify-between phone:pl-0 ">
            <button
              onClick={handleOpenNavbar}
              className="laptop:hidden  desktop:hidden phone:mx-4 tablet:mx-4"
            >
              <FontAwesomeIcon icon={faBars} className="text-myblack" />
            </button>
            <Link
              href="#top"
              className="text-myblack decoration-none"
              scroll={false}
            >
              Brando Bogar
            </Link>
          </div>
          <div className=" flex w-1/2 h-full justify-end items-center pr-10 phone:justify-center phone:p-0 phone:hidden tablet:hidden">
            <ul className="flex flex-row justify-end">
              <li className="pl-5 pr-5 hover:bg-mywhite rounded-lg">
                <Link href="#project" scroll={false}>
                  Project
                </Link>
              </li>
              <li className="pl-5 pr-5 hover:bg-mywhite rounded-lg">
                <Link href="#resume" scroll={false}>
                  Resume
                </Link>
              </li>
              <li className="pl-5 pr-5 hover:bg-mywhite rounded-lg">
                <Link href="#about" scroll={false}>
                  About
                </Link>
              </li>
              <li className="pl-5 pr-5 hover:bg-mywhite rounded-lg">
                <Link href="/features" scroll={false}>
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
