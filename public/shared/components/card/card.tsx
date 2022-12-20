import style from "./Card.module.scss"
type props = {
    title: string
}
const card = ({title}:props)=>{
 return(
    <div className={style.card_container}>
        <span>{title}</span>
    </div>
 )
}
export default card