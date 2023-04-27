import style from "./Home.module.scss";
import image from "../../../../public/assets/images/image.jpg";
import arrow_down from "../../../../public/assets/icons/arrow.svg";
import { landing, quoted } from "../../../../public/shared/modules/landing";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import Image from "next/image";
import { useEffect, useRef } from "react";

export var home_height=0;

const HomeSection = ({sendHeight}:any) => {

  const ref = useRef(null)
  useEffect(()=>{
    home_height = (ref.current as any).offsetHeight;
    sendHeight(home_height);
  })
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
        {/* <div className={style.home_description_text}>
          
        </div> */}
        {/* <div className={style.home_description_arrow}>
          <Image
            src={arrow_down}
            alt="next section"
            className={style.home_description_arrow_icon}
            role="button"
            tabIndex={1}
            aria-label="scroll down"
            onClick={()=>{
              window.scrollTo({top: home_height,behavior:"smooth"})
            }}
          />
        </div> */}
      </div>
      <div
        className={style.home_image}
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: `cover`,
          backgroundPositionX: `60%`
        }}
      ></div>
    </div>
  );
};
export default HomeSection;
