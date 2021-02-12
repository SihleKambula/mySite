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
              <img src="images/logo2.svg" alt="logo" />
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
              <a href="/resume" target="blank">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
