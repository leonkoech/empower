import style from "./Contact.module.scss";
import Italicized from "../../../../public/shared/components/italicized/Italicized";
import { contact_data, contact_title} from "../../../../public/shared/modules/contact";
import { contacts } from "../../../../public/shared/models/contacts";
import Contact_Card from "../../../../public/shared/components/contact/Contact";

const Contact = () => {
    return (
        <div className={style.contact_container}>
            <div  className={style.contact_container_top}>
                <h2><Italicized word={contact_title}></Italicized></h2>
            </div>
            <div  className={style.contact_container_bottom}>
                {
                contact_data.map((val:contacts, index: number)=>{
                    return(<Contact_Card  key={index} title={val.title} list={val.list}></Contact_Card>)
                })
            }
            </div>
        </div>
    )
}

export default Contact