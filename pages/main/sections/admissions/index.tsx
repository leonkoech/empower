import style from "../treatment/Treatment.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { useRef, useEffect, forwardRef } from "react";
import { admissions_tab } from "../../../../public/shared/modules/admissions";

export var enroll_height = 0;
const Admissions = forwardRef(function Admissions({}:any, ref:any) {
  // const ref = useRef(null);
  // useEffect(()=>{
  //   sendHeight((ref.current as any).offsetHeight);
  // })
  return (
    <div ref={ref}  className={`${style.container}`}>
      <div  className={style.container__text__justified}>
        <h2 className={style.container__title}>
          <Italicized word={admissions_tab.title} />
        </h2>
        <Italicized word={admissions_tab.description} />
      </div>

    </div>
  );
});
export default Admissions;
