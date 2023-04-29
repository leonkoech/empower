import style from "./Enroll.module.scss";
import { enroll_data } from "../../../../public/shared/modules/enroll";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { useRef, useEffect } from "react";

export var enroll_height = 0;
const Enroll = ({sendHeight}:any) => {
  const ref = useRef(null)
  useEffect(()=>{
    sendHeight((ref.current as any).offsetHeight);
  })
  return (
 
      <div ref={ref} className={style.enroll_container}>
        {
          enroll_data.map((section: any, index: any)=>{
            return(
              <div key={index}  className={` ${
                index % 2 == 0
                  ? style.enroll_container_left
                  : style.enroll_container_right
              }`}>
                <h2 role="term">
                  <Italicized word={section.title}></Italicized>
                </h2>
                <p role="description">{section.details}</p>
              </div>
            )
          })
        }
    </div>
  );
};
export default Enroll;
