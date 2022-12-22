import style from "./Enroll.module.scss"
import { enroll_data } from "../../../../public/shared/modules/enroll"
import Italicized from "../../../../public/shared/components/italicized/Italicized"

const Enroll=()=>{
    return (
        <div className={style.enroll_container}>
            <div className={style.enroll_container_sub}>
                <h2><Italicized word={enroll_data.title}></Italicized></h2>
                <p>{enroll_data.description}</p>
            </div>
        </div>
    )
}
export default Enroll