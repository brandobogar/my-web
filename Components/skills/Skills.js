import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as emptyCirlce } from "@fortawesome/free-regular-svg-icons";
import { faCircle as fullCirlce } from "@fortawesome/free-solid-svg-icons";
import { faCircleHalfStroke as halfCircle } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen mt-20 mb-20 font-oxygen">
        <div className="pt-10 mt-10 text-4xl underline">
          <h1>SKILLS & ABILITIES</h1>
        </div>
        <div className="flex flex-row w-screen gap-10 p-40 mt-10 justify-evenly text-myblack phone:flex-col phone:p-8 tablet:flex-col">
          <ul>
            <h1 className="pb-5 text-xl font-bold">Graphics Designer</h1>
            <div className="flex flex-col justify-between gap-2">
              <ul className="text-lg">
                <li className="flex flex-row items-center justify-between gap-5 ">
                  <p>Adobe Photoshop</p>
                  <span className="flex flex-row">
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                  </span>
                </li>
                <li className="flex flex-row items-center justify-between gap-5">
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
            <h1 className="pb-5 text-xl font-bold">Machine Learning</h1>
            <div className="flex flex-col justify-between gap-5">
              <ul className="text-lg">
                <li className="flex flex-row items-center justify-between gap-5">
                  <p>Python</p>
                  <span className="flex flex-row">
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={fullCirlce} />
                    <FontAwesomeIcon icon={halfCircle} />
                    <FontAwesomeIcon icon={emptyCirlce} />
                  </span>
                </li>
                <li className="flex flex-row items-center justify-between gap-5">
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
            <h1 className="pb-5 text-xl font-bold">Front-end developer</h1>
            <div className="flex flex-col justify-between gap-5">
              <ul className="text-lg">
                <li className="flex flex-row items-center justify-between gap-5">
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
