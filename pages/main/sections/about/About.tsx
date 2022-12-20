import style from "./About.module.scss";
import { about } from "../../../../public/shared/models/about";
import { about_data } from "../../../../public/shared/modules/about";

const About = () => {
  return (
    <div className={style.container}>
      {about_data.map((value: about, index: number) => {
        return (
          <div
            className={`${style.container_text} ${
              index % 2 == 0
                ? style.container_text_left
                : style.container_text_right
            }`}
          >
            <div>
              <h2>
                {value.title} <i>{value.italics}</i>
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
