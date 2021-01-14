// Navigation bar
import { useState } from "react";
import Link from "next/link";
import style from "../styles/components/navbar.module.scss";
import cx from "classnames";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
            <p>SK</p>
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
