import { useEffect, useRef } from "react";
import style from "./Footer.module.scss";

export var footer_height = 0;
const Footer = () => {
  const ref = useRef(null);
  useEffect(() => {
    footer_height = (ref.current as any).offsetHeight;
  });
  return (
    <div ref={ref} className={style.footer_container}>
      <span>Empower</span>
      <span>2023 ©</span>
    </div>
  );
};
export default Footer;
