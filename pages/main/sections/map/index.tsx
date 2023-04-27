// import style from "";
import style from "../contact/Contact.module.scss"
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import {map_title} from "../../../../public/shared/modules/contact";

const MapComponent = () =>{
  const iframe_src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJiyN69GoUK4cRL0xMGoEWsa4&key=AIzaSyCmohzLBls4xBJXze9aHtToLWDPttDzDEg&zoom=18";

return (
    <div className={`${style.contact_container_tertiary} ${style.contact_container}`}>
      <div className={style.contact_container_map_title}>
        <h2>
          <Italicized word={map_title}></Italicized>
        </h2>
      </div>
      <iframe className={style.contact_container_map} width="100%" height="450"  style={{border:0}} loading="lazy" allowFullScreen src={iframe_src}></iframe>
    </div>
);
}

export default MapComponent
