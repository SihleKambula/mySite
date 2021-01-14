import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sihle Kambula</title>
      </Head>

      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
