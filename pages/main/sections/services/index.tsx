import style from "./Service_teams.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { service } from "../../../../public/shared/modules/service_cont";
import Card from "../../../../public/shared/components/card/Card";
import { useEffect, useRef } from "react";

const Service = ({sendHeight}:any) => {
  const ref = useRef(null)
  useEffect(()=>{
    sendHeight((ref.current as any).offsetHeight);
  })
  return (
    <div  ref={ref}  className={style.container}>
          <div >
            <h2 className={style.container__title}>
              <Italicized word={service.title}></Italicized>
            </h2>
            <div className={style.container__cards}>
              {service.list.map((v: string, index: number) => {
                return <Card  title={v} key={index}></Card>;
              })}
            </div>
          </div>
    </div>
  );
};

export default Service;
