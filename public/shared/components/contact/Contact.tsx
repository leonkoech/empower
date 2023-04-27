import style from "./Contact.module.scss";
import { contacts } from "../../models/contacts";


const Contact_Card = ({title,list}: contacts) => {
    return(
        <div className={style.contact_card_container}>
            <span>{title}</span>
            {
                list.map((val:string, index: number) => {
                    if(index === 4 && title == "general"){
                        return (<a key={index} href={`mailto:${val}?subject=RE: Inquiries Empower Recovery Center Website`}>{val}</a>)
                    }
                    if(index === 5 && title == "general"){
                        return (<a key={index} href={`https://${val}`}>{val}</a>)
                    }
                    else{
                        return (<p key={index}>{val}</p>)
                    }
                    
                })
            }
        </div>
    )
}
export default Contact_Card