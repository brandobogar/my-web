import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className=" flex flex-row bg-myteal w-screen top-0 fixed h-20 text-myblack text-xl shadow-2xl phone:flex-col phone:items-center tablet:flex-row">
          <div className=" flex w-1/2 h-full justify-start items-center pl-8">
            <Link
              href="#top"
              className="text-myblack decoration-none"
              scroll={false}
            >
              Brando Bogar
            </Link>
          </div>
          <div className=" flex w-1/2 h-full justify-center items-center">
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
