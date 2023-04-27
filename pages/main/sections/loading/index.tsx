import { useEffect, useRef } from "react";
import style from "./Loading.module.scss";
import logo from "../../../../public/assets/images/logo.png"; 
import Image from "next/image";

const Loader = ({loaded}:any) => {
 
  return (
    <div className={`${(!loaded)?style.loader_container:style.loader_hidden}`}>
       <Image
              src={logo}
              alt="loading"
              className={style.image}
            />
    </div>
  );
};
export default Loader;