import Italicized from "../../../../public/shared/components/italicized/Italicized";
import style from "../treatment/Treatment.module.scss"
import { useRef, useEffect } from "react";
import { insurance_tab } from "../../../../public/shared/modules/insurance";

const Insurance = ({sendHeight}: any) =>{
    const ref = useRef(null);
    // useEffect(() => {
    //   sendHeight((ref.current as any).offsetHeight);
    // });
  return(
    <div ref={ref} className={style.container}>
    <div>
      <h2 className={style.container__title}>
        <Italicized word={insurance_tab.title} />
      </h2>
        <Italicized word={insurance_tab.description} />        
    </div>
 
  </div>
  )
}

export default Insurance;