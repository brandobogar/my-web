import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-row w-full h-1/2 bg-myblack2 text-mywhite justify-evenly  p-10 text-xl font-oxygen items-center bottom-0 phone:flex-col">
        <div className="h-full justify-center items-center">
          <h1 className="text-2xl">Brando Margendy Bogar</h1>
        </div>
        <div className="flex flex-col h-full justify-end text-right phone:text-center phone:mt-5">
          <h1>Contact me</h1>
          <div className="flex flex-row justify-between m-2 mr-0 gap-10 phone:flex-col phone:justify-center phone:gap-0  ">
            <h1>(+62)82293462449</h1>
            <h1>brandobogar@gmail.com</h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
