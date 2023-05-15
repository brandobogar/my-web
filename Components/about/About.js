import React from "react";

import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-full p-20 mt-10 font-oxygen phone:p-0">
        <div className="pt-10 text-4xl underline">
          <h1>ABOUT</h1>
        </div>
        <div className="flex flex-row items-center m-20 phone:flex-col tablet:flex-col">
          <Image
            src={"/profil.jpg"}
            alt="prof-pic"
            width={170}
            height={170}
            className="p-0 mr-4 rounded-full "
          />

          <div className="phone:mt-10">
            <p className="text-xl text-justify">
              An informatics engineering graduate with experience in graphic
              design and mastering various software such as Adobe Photoshop and
              Adobe Illustrator. Experienced in making posters and flyers for
              marketing needs. A highly dedicated, conscientious and motivated
              person to make attractive innovation to the company and have
              interested in graphics design as Front-End Developer and data
              science.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
