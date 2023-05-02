
import { images } from "../../../modules/images";
import Italicized from "../../italicized/Italicized";
import style from "./Card.module.scss";
import Image  from "next/image";


const Card = ({imageSrc, text}:any)  => {
  return(
  <div className={style.container}>
    <div className={style.container__image}>
    <Image
            key={text}
            src={imageSrc}
            className={style.container__image__implicit}
            alt={text}
            width={500}
            height={500}
            aria-label={text}
          />
    </div>
    <div className={style.container__text}>
        <Italicized word={text}></Italicized>
    </div>
  </div>
  );
}

export default Card;