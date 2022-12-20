import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "./main/sections/header/Header";
import HomeSection from "./main/sections/home/Home";
import About from "./main/sections/about/About";
import Footer from "./main/sections/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Empower</title>
        <meta name="description" content="Empower Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@0,6..96;1,6..96&family=Cedarville+Cursive&family=Playfair+Display:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Header></Header>
        <HomeSection></HomeSection>
        <About></About>
        <Footer></Footer>
      </main>
    </>
  );
}
