import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume.pdf</title>
      </Head>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <embed
          src="/Sihle Kambula.pdf"
          type="application/pdf"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
}
