import style from "./About.module.scss";
import { about } from "../../public/shared/models/about";
import { about_data } from "../../public/shared/modules/about";
import Italicized from "../../public/shared/components/italicized/Italicized";
import { useRef, useEffect } from "react";
import Head from "next/head";
import Header from "../main/sections/header/Header";
import Footer from "../main/sections/footer/Footer";

export var about_height=0;
const About = () => {
  const ref = useRef(null)
  useEffect(()=>{
    about_height = (ref.current as any).offsetHeight;
  })
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
      <Header  selected_tab="about"></Header>
      <div ref={ref} className={style.container}>
      {about_data.map((value: about, index: number) => {
        return (
          <div key={index}
            className={`${style.container_text} ${
              index % 2 == 0
                ? style.container_text_left
                : style.container_text_right
            }`}
          >
            <div >
              <h2 role="term">
                <Italicized word={value.title}></Italicized>
              </h2>
              <p role="definition" >{value.details}</p>
            </div>
          </div>
        );
      })}
    </div>
    <Footer></Footer>
    </>
    
  );
};
export default About;
