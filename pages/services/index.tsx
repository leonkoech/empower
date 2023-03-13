import style from "./Service_teams.module.scss";
import Italicized from "../../public/shared/components/italicized/Italicized";
import { service, team } from "../../public/shared/modules/service_team";
import Card from "../../public/shared/components/card/Card";
import { useRef, useEffect } from "react";
import Head from "next/head";
import Header from "../main/sections/header/Header";
import Footer from "../main/sections/footer/Footer";

export var service_height = 0;
export var team_height = 0;
export var service_team_height = 0;

const Service = () => {
  let sections = [service, team];
  const service_s = useRef(null);
  const team_s = useRef(null);
  const service_team_s = useRef(null)
  useEffect(() => {
    service_height = (service_s.current as any).offsetHeight;
    team_height = (team_s.current as any).offsetHeight;
    service_team_height = (service_team_s.current as any).offsetHeight;
  });
  return (
    <>
    <Head>
      <title>Empower</title>
      <meta name="description" content="Empower Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
    <Header  selected_tab="services"></Header>
    <div ref={service_team_s} className={style.container}>
      {sections.map((section: any, index: number) => {
        return (
          <div key={index} ref={index>0?team_s:service_s} >
            <h2 className={style.container__title}>
              <Italicized word={section.title}></Italicized>
            </h2>
            <div className={style.container__cards}>
              {section.list.map((v: string, index: number) => {
                return <Card title={v} key={index}></Card>;
              })}
            </div>
          </div>
        );
      })}
    </div><Footer></Footer></>
  );
};

export default Service;
