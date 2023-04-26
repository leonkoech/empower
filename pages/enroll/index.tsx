import style from "./Enroll.module.scss";
import { enroll_data } from "../../public/shared/modules/enroll";
import Italicized from "../../public/shared/components/italicized/Italicized";
import { useRef, useEffect } from "react";
import Footer from "../main/sections/footer/Footer";
import Header from "../main/sections/header/Header";
import Head from "next/head";

export var enroll_height = 0;
const Enroll = () => {
  const ref = useRef(null);
  useEffect(() => {
    enroll_height = (ref.current as any).offsetHeight;
  });
  return (
    <>
     <Head>
        <title>Empower</title>
        <meta name="description" content="Empower Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header  selected_tab="enroll"></Header>
      <div ref={ref} className={style.enroll_container}>
        {
          enroll_data.map((section: any, index: any)=>{
            return(
              <div key={index} className={style.enroll_container_sub}>
                <h2 role="term">
                  <Italicized word={section.title}></Italicized>
                </h2>
                <p role="description">{section.details}</p>
              </div>
            )
          })
        }
      
    </div>
    <Footer></Footer>
    </>

    
  );
};
export default Enroll;
