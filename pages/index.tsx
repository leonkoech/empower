import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "./main/sections/header/Header";
import HomeSection from "./main/sections/home/Home";
import About from "./main/sections/about/About";
import Footer from "./main/sections/footer/Footer";
import Service from "./main/sections/services_team/Service";
import Enroll from "./main/sections/enroll/Enroll";
import Contact from "./main/sections/contact/Contact";

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
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz@0,6..96;1,6..96"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <main>
        <Header></Header>
        <HomeSection></HomeSection>
        <About></About>
        <Service></Service>
        <Enroll></Enroll>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}
