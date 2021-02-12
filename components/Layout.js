import Head from "next/head";
import Navbar from "./Navbar";
import style from "../styles/components/layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sihle Kambula</title>
        <link rel="shortcut icon" href="images/logo2.svg" type="image/x-icon" />
      </Head>

      <div className={style.container}>
        <Navbar />
        {children}
      </div>
    </>
  );
}
