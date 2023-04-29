import { coa } from "../../../modules/contact";
import style from "./Coa.module.scss";
import Image from "next/image";

const Coa = () => {
  return (
    <div className={style.container}>
      <div className={style.container__icon}>
        <Image
          src={coa.icon}
          className={style.container__icon__implicit}
          alt={coa.description}
          width={0}
          height={0}
          aria-label={coa.description}
        />
      </div>
      <div className={style.container__text}>
        <div>
          <p>
            {coa.description}
          </p>
          <h3>
            {coa.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Coa;
