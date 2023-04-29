import Italicized from "../../../../public/shared/components/italicized/Italicized";
import style from "../treatment/Treatment.module.scss"
import { useRef, useEffect, forwardRef } from "react";
import { insurance_tab } from "../../../../public/shared/modules/insurance";

const Insurance = forwardRef(function Insurance({}:any, ref: any){
   
  return(
    <div ref={ref} className={`${style.container}  ${style.container__theme__secondary} ${style.container__three}`}>
    <div className={style.container__text__justified}>
      <h2 className={style.container__title}>
        <Italicized word={insurance_tab.title} />
      </h2>
        <Italicized word={insurance_tab.description} />        
    </div>
 
  </div>
  )
});

export default Insurance;