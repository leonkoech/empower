import style from "./Service_teams.module.scss"
import Italicized from "../../../../public/shared/components/italicized/Italicized"
import { service,team } from "../../../../public/shared/modules/service_team"
import Card from "../../../../public/shared/components/card/Card"


const Service = () =>{
    let sections = [service,team]
    return (
        <div className={style.container}>
            { 
                sections.map((section:any,index:number)=>{
                    return(
                  <div key={index} >
                    <h2><Italicized word={section.title}></Italicized></h2>
                    <div className={style.container__cards}>
                        {
                            section.list.map((v: string)=>{
                                return(<Card title={v}></Card>)
                            })
                        }
                    </div>
                  </div>  
                    )
                })
            }            

        </div>
    )
}

export default Service