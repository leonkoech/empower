import style from "./Home.module.scss";
import image from "../../../../public/assets/images/image.jpg";
import arrow_down from "../../../../public/assets/icons/arrow.svg"
import {landing} from "../../../../public/shared/modules/landing"
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className={style.home_container}>
      <div className={style.home_description}>
        <div className={style.home_description_text}> 
          <h1><Italicized word={landing}></Italicized></h1>
        </div>
        <div className={style.home_description_arrow}>
          {/* <span className="material-symbols-outlined">expand_more</span> */}
          <Image
          src={arrow_down}
          alt= "more"
          className={style.home_description_arrow_icon}
          />
        </div>
      </div>
      <div
        className={style.home_image}
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: `cover`,
          backgroundPositionX: `center`
        }}
      ></div>
    </div>
  );
};
export default HomeSection;
