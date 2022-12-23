import style from "./About.module.scss";
import { about } from "../../../../public/shared/models/about";
import { about_data } from "../../../../public/shared/modules/about";
import Italicized from "../../../../public/shared/components/italicized/Italicized";

const About = () => {
  return (
    <div className={style.container}>
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
              <h2>
                <Italicized word={value.title}></Italicized>
              </h2>
              <span>{value.details}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default About;
