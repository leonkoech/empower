import style from "./Treatment.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import {
  treatment,
  treatment_top
} from "../../../../public/shared/modules/treatment_cont";
import Card from "../../../../public/shared/components/card/Card";
import { useRef, useEffect, forwardRef } from "react";
import { italics } from "../../../../public/shared/models/italics";

export var service_height = 0;
export var team_height = 0;
export var service_team_height = 0;

const Treatment = forwardRef(function Treatment({}:any, ref: any) {
 
  return (
    <div ref={ref} className={`${style.container} ${style.container__theme__secondary}`}>
      <div>
        <h2 className={style.container__title}>
          <Italicized word={treatment_top.title} />
        </h2>
        {treatment_top.details.map((value: italics, index: number) => {
          return (
            <div key={index} className={style.container__text__justified}>
              <Italicized word={value} />
              <br /><br />
            </div>
          );
        })}
      </div>
      <div>
        <h2 className={style.container__title}>
          <Italicized word={treatment.title} />
        </h2>
        <div className={`${style.container__cards} ${style.container__theme__secondary__cards}`}>
          {treatment.list.map((v: string, index: number) => {
            return <Card title={v} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
});

export default Treatment;
