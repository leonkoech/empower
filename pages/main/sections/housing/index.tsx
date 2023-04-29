import { useRef } from "react";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import style  from "../treatment/Treatment.module.scss";
import { housing_tab } from "../../../../public/shared/modules/housing_cont";
import Card from "../../../../public/shared/components/card/Card";

const Housing = () =>{
const ref = useRef(null);
  return (
    <div ref={ref} className={style.container}>
    <div>
      <h2 className={style.container__title}>
        <Italicized word={housing_tab.title} />
      </h2>
      <Italicized word={housing_tab.details}></Italicized>
      <div className={style.container__cards}>
        {housing_tab.list.map((v: string, index: number) => {
          return <Card title={v} key={index} />;
        })}
      </div>
    </div>
  </div>
    )
}
export default Housing