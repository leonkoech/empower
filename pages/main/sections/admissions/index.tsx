import style from "../treatment/Treatment.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { useRef, useEffect, forwardRef } from "react";
import { admissions_tab } from "../../../../public/shared/modules/admissions";
import { contact_card } from "../../../../public/shared/modules/contact";
import Card from "../../../../public/shared/components/contact/card/Card";
import Coa from "../../../../public/shared/components/contact/coa/Coa";

export var enroll_height = 0;
const Admissions = forwardRef(function Admissions({}:any, ref:any) {
  // const ref = useRef(null);
  // useEffect(()=>{
  //   sendHeight((ref.current as any).offsetHeight);
  // })
  return (
    <div ref={ref}  className={style.container}>
      <div  className={style.container__text__justified}>
        <h2 className={style.container__title}>
          <Italicized word={admissions_tab.title} />
        </h2>
        <Italicized word={admissions_tab.description} />
      </div>
      <div className={`${style.container} ${style.container__inner}`}>
        <h2>
          <Italicized word={contact_card.title} />
        </h2>
        <div className={style.container__row}>
          {contact_card.cards.map((card: any, index: any) => {
            return <Card key={index} imageSrc={card.image} text={card.text} />;
          })}
        </div>

        <div className={style.container__coa}>
          <Coa />
        </div>
      </div>
    </div>
  );
});
export default Admissions;
