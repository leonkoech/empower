import style from "./About.module.scss";
import { about } from "../../../../public/shared/models/about";
import { about_data } from "../../../../public/shared/modules/about";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { useRef, useEffect } from "react";

export var about_height=0;
const About = () => {
  const ref = useRef(null)
  useEffect(()=>{
    about_height = (ref.current as any).offsetHeight;
  })
  return (
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
              <h2>
                <Italicized word={value.title}></Italicized>
              </h2>
              <p>{value.details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default About;
