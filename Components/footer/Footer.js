import React from "react";

function Footer() {
  return (
    <>
      <footer className="bottom-0 flex flex-row items-center w-full p-10 text-xl h-1/2 bg-myblack2 text-mywhite justify-evenly font-oxygen phone:flex-col">
        <div className="items-center justify-center h-full">
          <h1 className="text-2xl">Brando Margendy Bogar</h1>
        </div>
        <div className="flex flex-col justify-end h-full text-right phone:text-center phone:mt-5">
          <h1>Contact me</h1>
          <div className="flex flex-row justify-between gap-10 m-2 mr-0 phone:flex-col phone:justify-center phone:gap-0 ">
            <h1>(+62)82293462449</h1>
            <h1>brandobogar@gmail.com</h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
