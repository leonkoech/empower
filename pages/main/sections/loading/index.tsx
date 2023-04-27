import style from "./Loading.module.scss";
import { images } from "../../../../public/shared/modules/images";
import Image from "next/image";

const Loader = ({loaded}:any) => {
 
  return (
    <div className={`${(!loaded)?style.loader_container:style.loader_hidden}`}>
       <Image
              src={images.logo}
              alt="loading"
              className={style.image}
            />
    </div>
  );
};
export default Loader;