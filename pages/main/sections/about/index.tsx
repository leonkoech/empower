import style from "./About.module.scss";
import { about } from "../../../../public/shared/models/about";
import { about_data } from "../../../../public/shared/modules/about";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { useRef, useEffect } from "react";
export var about_height=0;
const About = ({sendHeight}:any) => {
  const ref = useRef(null)
  useEffect(()=>{
    sendHeight((ref.current as any).offsetHeight);
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
              <h2 role="term">
                <Italicized word={value.title}></Italicized>
              </h2>
              <p role="definition" >{value.details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default About;
