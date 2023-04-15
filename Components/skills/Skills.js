import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as emptyCirlce } from "@fortawesome/free-regular-svg-icons";
import { faCircle as fullCirlce } from "@fortawesome/free-solid-svg-icons";
import { faCircleHalfStroke as halfCircle } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 mb-20 font-oxygen w-screen">
        <div className="text-4xl pt-10 underline mt-10">
          <h1>SKILLS & ABILITIES</h1>
        </div>
        <div className="flex flex-row gap-10 mt-10 w-screen justify-evenly p-40 text-myblack phone:flex-col phone:p-8 tablet:flex-col">
          <ul>
            <h1 className="text-xl font-bold pb-5">Graphics Designer</h1>
            <div className="flex flex-col justify-between gap-2">
              <ul className="text-lg">
                <li className=" flex flex-row justify-between gap-5 items-center">
                  <p>Adobe Photoshop</p>
                  <span className="flex flex-row">
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                  </span>
                </li>
                <li className="flex flex-row justify-between gap-5 items-center">
                  <p>Adobe Illustrator</p>
                  <span className="flex flex-row">
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                  </span>
                </li>
              </ul>
            </div>
          </ul>
          <ul>
            <h1 className="text-xl font-bold pb-5">Machine Learning</h1>
            <div className="flex flex-col justify-between gap-5">
              <ul className="text-lg">
                <li className="flex flex-row justify-between gap-5 items-center">
                  <p>Python</p>
                  <span className="flex flex-row">
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={halfCircle} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                  </span>
                </li>
                <li className="flex flex-row justify-between gap-5 items-center">
                  <p>Tensorflow</p>
                  <span className="flex flex-row">
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                  </span>
                </li>
              </ul>
            </div>
          </ul>
          <ul>
            <h1 className="text-xl font-bold pb-5">Front-end developer</h1>
            <div className="flex flex-col justify-between gap-5">
              <ul className="text-lg">
                <li className="flex flex-row justify-between gap-5 items-center">
                  <p>React</p>
                  <span className="flex flex-row">
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={halfCircle} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                  </span>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

//!Bekeng  machine learning deng web developer sbntr
