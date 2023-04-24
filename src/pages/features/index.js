import Navbar from "../../../Components/features/navbar/Navbar";
import Layout from "../../../Components/features/layout/layout";

export default function index() {
  return (
    <>
      <Layout pagetitle="Features" desc="Brando features web">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl text-black">Features page</h1>
        </div>
      </Layout>
    </>
  );
}
