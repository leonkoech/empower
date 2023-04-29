import style from "./Home.module.scss";
import image from "../../../../public/assets/images/image.jpg";
import { images } from "../../../../public/shared/modules/images";
import arrow_down from "../../../../public/assets/icons/arrow.svg";
import { landing, quoted } from "../../../../public/shared/modules/landing";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import Image from "next/image";
import { forwardRef, useEffect, useRef } from "react";

export var home_height=0;

const HomeSection = forwardRef(function Admissions({}:any, ref:any) {

  
  return (
    <div ref={ref} className={style.home_container}>
      <div className={style.home_description}>
        <div className={style.home_description_text}>
          <h1>
            <Italicized word={landing}></Italicized>
          </h1>
          <br></br>
          <h3>
            <Italicized word={quoted}></Italicized>
          </h3>
        </div>
      </div>
      <div
        className={style.home_image}
        style={{
          backgroundImage: `url(${images.phoenix.src})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPositionY: `60%`
        }}
      ></div>
    </div>
  );
});
export default HomeSection;
