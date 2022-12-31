import style from "./Enroll.module.scss";
import { enroll_data } from "../../../../public/shared/modules/enroll";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { useRef, useEffect } from "react";

export var enroll_height = 0;
const Enroll = () => {
  const ref = useRef(null);
  useEffect(() => {
    enroll_height = (ref.current as any).offsetHeight;
  });
  return (
    <div ref={ref} className={style.enroll_container}>
      <div className={style.enroll_container_sub}>
        <h2>
          <Italicized word={enroll_data.title}></Italicized>
        </h2>
        <p>{enroll_data.details}</p>
      </div>
    </div>
  );
};
export default Enroll;
