// Navigation bar
import Link from "next/link";
import style from "../styles/components/navbar.module.scss";
import cx from "classnames";

export default function Navbar() {
  return (
    <header className={style.navbar_container}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <p>SK</p>
        </div>
        <ul className={style.navbar_links}>
          <li className={cx(style.navbar_link, style.active)}>
            <Link href="#home">Home</Link>
          </li>
          <li className={style.navbar_link}>
            <Link href="#about">About</Link>
          </li>
          <li className={style.navbar_link}>
            <Link href="#projects">Projects</Link>
          </li>
          <li className={style.navbar_link}>
            <Link href="#blog">Blog</Link>
          </li>
          <li className={style.navbar_link}>
            <Link href="#contact">Contact</Link>
          </li>
          <li className={style.navbar_link}>
            <Link href="/">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
