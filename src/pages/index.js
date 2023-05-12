import Head from 'next/head'
import Image from "next/image";
import styles from "myweb/styles/Home.module.css";
import Link from "next/link";
import Components from "../../Components/Component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Brando Bogar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components.Nav />

      {/* <Navbar /> */}
      <main className={styles.main} id="top">
        <Image
          src="/profil.jpg"
          alt="profil-pic"
          width={200}
          height={200}
          className="rounded-full"
          hidden
        />
        <div className="text-center  flex flex-col justify-around gap-2 text-myblack phone:mx-5">
          <h1 className="text-5xl font-oxygen ">Hi there!</h1>
          <h1 className="text-4xl font-oxygen ">I am Brando Margendy Bogar</h1>
          <h2 className="text-2xl mt-2">Front-end Developer</h2>
          <p className="text-xl">
            A Front-end Developer based in Manado, Indonesia
          </p>
        </div>
        <Components.Social />

        <Link
          href="https://statichunt.com/demo/nextjs-hydrogen"
          target="_blank"
          hidden
        >
          Web referensi
        </Link>
      </main>
      <aside id="project" className="text-myblack">
        <Components.Project />
      </aside>
      <aside id="about" className="text-myblack">
        <Components.About />
      </aside>
      <aside id="resume" className="text-myblack">
        <Components.Education />
      </aside>
      <aside className="text-myblack">
        <Components.Skills />
      </aside>
      <aside className="text-myblack">
        <Components.Footer />
      </aside>
    </>
  );
}

// !! Jangan lupa git push untuk beberapa file