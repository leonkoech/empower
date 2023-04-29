import { useEffect, useRef } from "react";
import style from "./Footer.module.scss";

export var footer_height = 0;
const Footer = () => {
  
  return (
    <div  className={style.footer_container}>
      <span>Empower Recovery Center</span>
      <span>2023 ©</span>
    </div>
  );
};
export default Footer;
