import style from "../contact/Contact.module.scss"
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import {map_title} from "../../../../public/shared/modules/contact";
import { iframe_src } from "../../../../public/shared/services/map";

const MapComponent = () =>{

return (
    <div className={`${style.contact_container_tertiary} ${style.contact_container}`}>
      <div className={style.contact_container_map_title}>
        <h2>
          <Italicized word={map_title}></Italicized>
        </h2>
      </div>
      <iframe className={style.contact_container_map} width="100%" height="450"  style={{border:0}} loading="lazy" allowFullScreen src={iframe_src} title="map location"></iframe>
    </div>
);
}

export default MapComponent
