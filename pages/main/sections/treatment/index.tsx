import style from "./Treatment.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import {
  treatment,
  treatment_top
} from "../../../../public/shared/modules/treatment_cont";
import Card from "../../../../public/shared/components/card/Card";
import { useRef, useEffect } from "react";
import { italics } from "../../../../public/shared/models/italics";

export var service_height = 0;
export var team_height = 0;
export var service_team_height = 0;

const Service = ({ sendHeight }: any) => {
  const ref = useRef(null);
  useEffect(() => {
    sendHeight((ref.current as any).offsetHeight);
  });
  return (
    <div ref={ref} className={style.container}>
      <div>
        <h2 className={style.container__title}>
          <Italicized word={treatment_top.title} />
        </h2>
        {treatment_top.details.map((value: italics, index: number) => {
          return (
            <div>
              <Italicized key={index} word={value} />
              <br /><br />
            </div>
          );
        })}
      </div>
      <div>
        <h2 className={style.container__title}>
          <Italicized word={treatment.title} />
        </h2>
        <div className={style.container__cards}>
          {treatment.list.map((v: string, index: number) => {
            return <Card title={v} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
