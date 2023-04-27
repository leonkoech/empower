import style from "./Service_teams.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { treatment } from "../../../../public/shared/modules/treatment_cont";
import Card from "../../../../public/shared/components/card/Card";
import { useRef, useEffect } from "react";
import Head from "next/head";
import Header from "../../../main/sections/header/Header";
import Footer from "../../../main/sections/footer/Footer";
// import { treatment_data } from "../../public/shared/modules/treatment";

export var service_height = 0;
export var team_height = 0;
export var service_team_height = 0;

const Service = ({sendHeight}:any) => {
  const ref = useRef(null)
  useEffect(()=>{
    sendHeight((ref.current as any).offsetHeight);
  })
  return (
    <div  ref={ref}  className={style.container}>
      {/* {treatment.map((section: any, index: number) => {
        return ( */}
          <div   >
            <h2 className={style.container__title}>
              <Italicized word={treatment.title}></Italicized>
            </h2>
            <div className={style.container__cards}>
              {treatment.list.map((v: string, index: number) => {
                return <Card title={v} key={index}></Card>;
              })}
            </div>
          </div>
        {/* );
      })} */}
    </div>
  );
};

export default Service;
