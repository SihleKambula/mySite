import Head from "next/head";
import Navbar from "./Navbar";
import style from "../styles/components/layout.module.scss";
import { useState } from "react";

export default function Layout({ children, pageScroll }) {
  return (
    <>
      <Head>
        <title>Sihle Kambula</title>
      </Head>

      <div className={style.container}>
        <Navbar pageScroll={pageScroll} />
        {children}
      </div>
    </>
  );
}
