import Head from "next/head";
import Navbar from "./Navbar";
import style from "../styles/components/layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sihle Kambula</title>
      </Head>

      <div
        className={style.container}
        style={{ background: 'url("images/bg_4.webp") no-repeat center/cover' }}
      >
        <Navbar />
        {children}
      </div>
    </>
  );
}
