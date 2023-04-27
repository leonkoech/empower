import style from "./Diamond.module.scss";
import { images } from "../../modules/images";
import { paths } from "../../modules/svg";
const Diamond = ({ imageUrl, front, back }: any) => {
    
   
    return (
        <div className={style.image_container} >
            <svg  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {
                       <svg id="background" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path  d={paths[back]} transform="translate(100 100)" />
                        </svg> 
                    }
                    
                    <pattern id="image" x="0" y="0" width="1" height="1">
                    <image href={imageUrl} x="0" y="0" width="200" height="200"  />
                        {/* <image href="https://upload.wikimedia.org/wikipedia/en/2/21/Black_Clover_Sword_of_The_Wizard_King.jpg" x="0" y="0" width="100" height="100" /> */}
                    </pattern>
                </defs>
                
             <use href="#background" />
                
                {

                }
                <path  d={paths[front]} transform="translate(100 100)" />

                {/* <g>
                    <defs>
                        <mask id="pathMask">
                        <path fill="#1F7A3D" d="M53.7,-35.6C67.1,-26,73.8,-3.8,68.7,14.4C63.5,32.6,46.4,46.8,28.5,53C10.6,59.3,-8.2,57.7,-23.8,50C-39.3,42.2,-51.6,28.4,-59.4,9.2C-67.3,-10,-70.8,-34.6,-60.1,-43.6C-49.5,-52.6,-24.8,-46,-2.3,-44.2C20.1,-42.3,40.2,-45.2,53.7,-35.6Z" transform="translate(100 100)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" mask="url(#pathMask)" style={svgStyle}  />
                    
                </g> */}
                {/* <path fill="url(#image)" d="M46.9,-60.2C59.7,-55.2,68.4,-40.1,74.8,-23.6C81.2,-7,85.2,11,81.5,27.8C77.8,44.5,66.4,60,51.5,66.6C36.6,73.1,18.3,70.6,-0.6,71.4C-19.5,72.3,-39,76.4,-53.6,69.8C-68.1,63.1,-77.8,45.8,-82.9,27.5C-88.1,9.2,-88.9,-10,-81.2,-24.1C-73.5,-38.3,-57.4,-47.5,-42.4,-51.9C-27.5,-56.2,-13.7,-55.7,1.6,-57.9C17,-60.2,34,-65.2,46.9,-60.2Z" transform="translate(100 100)" /> */}
                {/* <path fill="url(#image)" d="M46.9,-60.2C59.7,-55.2,68.4,-40.1,74.8,-23.6C81.2,-7,85.2,11,81.5,27.8C77.8,44.5,66.4,60,51.5,66.6C36.6,73.1,18.3,70.6,-0.6,71.4C-19.5,72.3,-39,76.4,-53.6,69.8C-68.1,63.1,-77.8,45.8,-82.9,27.5C-88.1,9.2,-88.9,-10,-81.2,-24.1C-73.5,-38.3,-57.4,-47.5,-42.4,-51.9C-27.5,-56.2,-13.7,-55.7,1.6,-57.9C17,-60.2,34,-65.2,46.9,-60.2Z" transform="translate(100 100)" /> */}
            </svg>
        </div>
    );
}

export default Diamond;