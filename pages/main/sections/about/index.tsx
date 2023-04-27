import style from "./About.module.scss";
import { about } from "../../../../public/shared/models/about";
import { images } from "../../../../public/shared/modules/images";
import { about_data } from "../../../../public/shared/modules/about";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { useRef, useEffect, useState } from "react";
import Diamond from "../../../../public/shared/components/diamond/Diamond";
import { paths } from "../../../../public/shared/modules/svg";

const About = ({sendHeight}:any) => {
  const [image, getImage] = useState(images.sample)
  const [front, getFront] = useState(getRandomInt(paths.length))
  const [back, getBack] = useState(getRandomInt(paths.length))
  const ref = useRef(null)
  useEffect(()=>{
    sendHeight((ref.current as any).offsetHeight);
  })

      
  function getRandomInt(num: number) {
    let selected =  Math.floor(Math.random() * num);
    return selected
  }
  
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
            <Diamond className={style.container_text_shape} front={front>0?front<paths.length?front+index:front-index:front} back={back>0?back<paths.length?back+index:back-index:back} imageUrl={`${images.sample.src}`}  ></Diamond>
          </div>
        );
      })}
    </div>
  );
};
export default About;
