import React from "react";

import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-screen mt-10 p-20 font-oxygen phone:p-0">
        <div className="text-4xl pt-10 underline">
          <h1>ABOUT</h1>
        </div>
        <div className="flex flex-row m-20 items-center phone:flex-col tablet:flex-col">
          <Image
            src={"/profil.jpg"}
            alt="prof-pic"
            width={170}
            height={170}
            className="rounded-full mr-4 p-0 "
          />

          <div className="phone:mt-10">
            <p className="text-justify text-xl">
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
