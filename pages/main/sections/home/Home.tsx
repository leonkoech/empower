import style from "./Home.module.scss";
import image from "../../../../public/image.jpg";
import {landing} from "../../../../public/shared/modules/landing"
import Italicized from "../../../../public/shared/components/italicized/Italicized";

const HomeSection = () => {
  return (
    <div className={style.home_container}>
      <div className={style.home_description}>
        <div className={style.home_description_text}> 
          <Italicized word={landing}></Italicized>
        </div>
        <div className={style.home_description_arrow}>
          <span className="material-symbols-outlined">expand_more</span>
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
