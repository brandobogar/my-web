import Link from "next/link";
import Image from "next/image";
import {
  faReact,
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social() {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-center text-xl text-myblack">SOCIALS</h1>

        <ul className="flex flex-row justify-evenly gap-6 mt-4 text-myblack">
          <li>
            <Link href={"https://github.com/brandobogar"} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="text-4xl" />
            </Link>
          </li>
          <li>
            <Link href={"https://twitter.com/Brandobogar"} target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/brando-bogar-068673230/"}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.instagram.com/brandobogar"}
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
