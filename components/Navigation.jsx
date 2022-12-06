import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import LogoIcon from "../public/logo.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const Navigation = ({ blog }) => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNav = () => {
    const nav = document.querySelector(".nav-list");

    if (showNavItems) {
      nav.classList.remove("nav-on");
      nav.classList.add("nav-off");
      document.querySelector(".nav-socials").classList.add("disappear");
      document.querySelector(".nav-icon-container").style.position = "absolute";
      setShowNavItems(false);
    } else {
      nav.classList.remove("nav-off");
      nav.classList.add("nav-on");
      document.querySelector(".nav-socials").classList.remove("disappear");
      document.querySelector(".nav-socials").classList.add("nav-socials-on");
      document.querySelector(".nav-icon-container").style.position = "fixed";
      setShowNavItems(true);
    }
  };

  const closeNav = () => {
    if (showNavItems) {
      setShowNavItems(false);
      toggleNav();
    }
  };

  useEffect(() => {}, [showNavItems]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      {!blog ? (
        <nav className="navigation">
          <header className="logo">
            <Link href="/">
              <Image src={LogoIcon} alt="Logo" />
              MakersDev
            </Link>
          </header>
          <div className="nav-items-container">
            <div onClick={toggleNav} className="nav-icon-container">
              {showNavItems ? <HiX size="2rem" /> : <HiMenuAlt4 size="2rem" />}
            </div>

            <ul className="nav-list">
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeNav}
                  href="#"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeNav}
                  href="#"
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeNav}
                  href="#"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeNav}
                  href="#"
                >
                  Contact
                </ScrollLink>
              </li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    backgroundColor: "#00cbba",
                    color: "#fff",
                    padding: ".5rem",
                    borderRadius: "10px",
                  }}
                >
                  Blog
                </Link>
              </li>
            </ul>

            <div className="nav-socials">
              <span>
                Follow us to be the first to know about sales & other updates ⚡
              </span>
              <a
                href="https://www.instagram.com/makersdev/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff" }}
                onClick={closeNav}
              >
                <AiFillInstagram size="1.7rem" color="#000" />
              </a>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navigation blogStyles">
          <header className="logo">
            <Link href="/">
              <Image src={LogoIcon} alt="Logo" />
              MakersDev
            </Link>
          </header>
          <Link href="/" className="blogLink">
            <IoIosArrowBack className="blogBack" size="2.5rem" />
          </Link>
        </nav>
      )}
    </>
  );
};

export default Navigation;
