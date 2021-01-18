// Navigation bar
import { useState } from "react";
import Link from "next/link";
import style from "../styles/components/navbar.module.scss";
import cx from "classnames";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/*  Show the different state of the navbar*/}
      <div
        className={cx(style.hambuger, isOpen ? style.show_buger : null)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <header>
        <nav
          className={cx(
            style.navbar_container,
            isOpen ? style.show : style.hide
          )}
        >
          <div className={style.logo}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 176.12 175.96"
              >
                <defs></defs>

                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polygon
                      className={style.cls_1}
                      points="53.28 2.81 2 54.09 2 124.61 51.36 173.97 123.8 173.97 174.12 123.64 174.12 52.81 123.31 2.01 53.28 2.81"
                    />
                    <text
                      className={style.cls_2}
                      transform="translate(47.95 106.6)"
                    >
                      SK
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <ul className={style.navbar_links}>
            <li
              className={style.navbar_link}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="#home">Home</Link>
            </li>
            <li
              className={style.navbar_link}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="#about">About</Link>
            </li>
            <li
              className={style.navbar_link}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="#projects">Projects</Link>
            </li>
            <li
              className={style.navbar_link}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="#blog">Blog</Link>
            </li>
            <li
              className={style.navbar_link}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link href="#contact">Contact</Link>
            </li>
            <li className={style.resume}>
              <Link href="/">Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
