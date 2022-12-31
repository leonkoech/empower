import Head from "next/head";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" />
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
