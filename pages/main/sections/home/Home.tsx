import style from "./Home.module.scss";
import Image from "next/Image";
import image from "../../../../public/image.jpg";
const HomeSection = () => {
  return (
    <div className={style.home_container}>
      <div className={style.home_description}>
        <div className={style.home_description_text}> 
          The awesome mission goes here, it should be longer than this. so
          Empower!
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
