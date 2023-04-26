import style from "./Contact.module.scss";
import Italicized from "../../public/shared/components/italicized/Italicized";
import {
  contact_data,
  contact_title
} from "../../public/shared/modules/contact";
import { contacts } from "../../public/shared/models/contacts";
import Contact_Card from "../../public/shared/components/contact/Contact";
import { useEffect, useRef } from "react";
import Head from "next/head";
import Header from "../main/sections/header/Header";
import Footer from "../main/sections/footer/Footer";
const Contact = () => {
  const iframe_src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJiyN69GoUK4cRL0xMGoEWsa4&key=AIzaSyCmohzLBls4xBJXze9aHtToLWDPttDzDEg&zoom=18";
  const ref = useRef(null);
 
  return (
    <>
    <Head>
        <title>Empower Recovery</title>
        <meta name="description" content="Empower Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header  selected_tab="contact"></Header>
    <div ref={ref} className={style.contact_container}>
      <div className={style.contact_container_top}>
        <h2>
          <Italicized word={contact_title}></Italicized>
        </h2>
      </div>
      <div className={style.contact_container_bottom}>
        {contact_data.map((val: contacts, index: number) => {
          return (
            <Contact_Card
              key={index}
              title={val.title}
              list={val.list}
            ></Contact_Card>
          );
        })}
      </div>
      <iframe width="100%" height="450"  style={{border:0}} loading="lazy" allowFullScreen src={iframe_src}></iframe>
    </div> 
    <Footer></Footer>
     </>
  );
};

export default Contact;
