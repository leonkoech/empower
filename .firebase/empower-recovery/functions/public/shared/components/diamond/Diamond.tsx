import style from "./Diamond.module.scss";
import { images } from "../../modules/images";
import { paths } from "../../modules/svg";
import Image from "next/image"

const Diamond = ({ imageUrl, front, back }: any) => {
    
   
    return (
        <div className={style.image_container} >
            {/* <svg  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {
                       <svg id="background" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path  d={paths[back]} transform="translate(100 100)" />
                        </svg> 
                    }
                    
                    <pattern id="image" x="0" y="0" width="1" height="1">
                    <image href={imageUrl} x="0" y="0" width="200" height="200"  />
                    </pattern>
                </defs>
                
                <use href="#background" />
                <path  d={paths[front]} transform="translate(100 100)" />
             </svg> */}
            <div>
            <Image
            key={imageUrl}
            src={imageUrl}
            className={style.image_container__image__implicit}
            alt={"text"}
             fill
            aria-label={"text"}
          />
            </div>
        </div>
    );
}

export default Diamond;