import style from "./Contact.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import {
  contact_data,
  contact_title,
  map_title
} from "../../../../public/shared/modules/contact";
import { contacts } from "../../../../public/shared/models/contacts";
import Contact_Card from "../../../../public/shared/components/contact/Contact";
import { forwardRef, useEffect, useRef } from "react";
import MapComponent from "../map";
import Footer from "../footer/Footer";
import Form from "../../../../public/shared/components/contact/form/Form";
import { italic } from "../../../../public/shared/modules/italics";
import { contact_card } from "../../../../public/shared/modules/contact";
import Card from "../../../../public/shared/components/contact/card/Card";
import Coa from "../../../../public/shared/components/contact/coa/Coa";
import coa from "../treatment/Treatment.module.scss";

export var contact_height=0;

const Contact = forwardRef(function Contact({}:any, ref:any) {
 
  return (
    <div ref={ref} >
            <div className={`${coa.container} ${coa.container__inner} ${style.contact_container_top}`}>
        <h2>
          <Italicized word={contact_card.title} />
        </h2>
        <div className={coa.container__row}>
          {contact_card.cards.map((card: any, index: any) => {
            return <Card key={index} imageSrc={card.image} text={card.text} />;
          })}
        </div>

        <div className={coa.container__coa}>
          <Coa />
        </div>
      </div>
      <div className={`${style.contact_container_primary} ${style.contact_container}`}>
      <div className={style.contact_container_top}>
        <h2>
          <Italicized word={contact_title}></Italicized>
        </h2>
      </div>
      <div className={style.contact_container_bottom}>
        {contact_data.map((val: contacts, index: number) => {
          return (
            <Contact_Card
              key={index}
              title={val.title}
              list={val.list}
            ></Contact_Card>
          );
        })}
      </div>
      </div>
      <div className={`${style.contact_container_primary} ${style.contact_container} ${style.contact_container_top}`}>
      <h2>
        <Italicized word={{text: italic, italics: ["Fill out this form"], bold: []}}></Italicized>
      </h2>
        <Form></Form>
      </div>
      <div className={style.contact_container_tertiary} >
        <MapComponent></MapComponent>
        <Footer></Footer>
      </div>
      </div> 
  );
});

export default Contact;
