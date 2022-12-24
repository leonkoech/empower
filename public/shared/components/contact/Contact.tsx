import style from "./Contact.module.scss";
import { contacts } from "../../models/contacts";


const Contact_Card = ({title,list}: contacts) => {
    return(
        <div className={style.contact_card_container}>
            <span>{title}</span>
            {
                list.map((val:string, index: number) => {
                    return (<p key={index}>{val}</p>)
                })
            }
        </div>
    )
}
export default Contact_Card