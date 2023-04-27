import style from "./Contact.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import {
  contact_data,
  contact_title
} from "../../../../public/shared/modules/contact";
import { contacts } from "../../../../public/shared/models/contacts";
import Contact_Card from "../../../../public/shared/components/contact/Contact";
import { useEffect, useRef } from "react";
export var contact_height=0;
const Contact = ({sendHeight}:any) => {
  const iframe_src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJiyN69GoUK4cRL0xMGoEWsa4&key=AIzaSyCmohzLBls4xBJXze9aHtToLWDPttDzDEg&zoom=18";
  const ref = useRef(null)
  useEffect(()=>{
    sendHeight((ref.current as any).offsetHeight);
  })
  return (
    <div ref={ref} className={style.contact_container}>
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
      <iframe width="100%" height="450"  style={{border:0}} loading="lazy" allowFullScreen src={iframe_src}></iframe>
    </div> 
  );
};

export default Contact;
