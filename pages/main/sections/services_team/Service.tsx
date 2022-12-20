import style from "./Service_team.module.scss"
type props={
    list: string[],
    title: string
}
const Service = ({list, title}: props) =>{
    return (
        <div className={style.service_container}>
            <h2>{title}</h2>
        </div>
    )
}

export default Service