import Head from "next/head";
import Footer from "../../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Layout({ children, pagetitle, desc }) {
  return (
    <>
      <Head>
        <title>{pagetitle} | Brando Bogar</title>
        <meta name="description" content={desc} />
      </Head>
      <div>
        <Navbar />
      </div>
      <div className="w-full h-screen ">{children}</div>
      <Footer />
    </>
  );
}
