import Head from "next/head";
import Navbar from "./Navbar";
import style from "../styles/components/layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sihle Kambula</title>
      </Head>

      <div className={style.container}>
        <Navbar />
        {children}
      </div>
    </>
  );
}
