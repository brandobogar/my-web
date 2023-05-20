import Footer from "../../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="w-full h-screen ">{children}</div>
      <Footer />
    </>
  );
}
