import style from "./Service_teams.module.scss";
import Italicized from "../../public/shared/components/italicized/Italicized";
import { service } from "../../public/shared/modules/service_cont";
import Card from "../../public/shared/components/card/Card";
import Head from "next/head";
import Header from "../main/sections/header/Header";
import Footer from "../main/sections/footer/Footer";

const Service = () => {
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
    <div className={style.container}>
          <div >
            <h2 className={style.container__title}>
              <Italicized word={service.title}></Italicized>
            </h2>
            <div className={style.container__cards}>
              {service.list.map((v: string, index: number) => {
                return <Card title={v} key={index}></Card>;
              })}
            </div>
          </div>
    </div><Footer></Footer></>
  );
};

export default Service;
