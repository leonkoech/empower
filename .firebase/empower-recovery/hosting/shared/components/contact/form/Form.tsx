import Italicized from "../../italicized/Italicized";
import style from "./Form.module.scss";
import { italic } from "../../../modules/italics";
import { useRef } from "react";
import { email } from "../../../models/email";

const Form = () => {
  const name =  useRef(null)
  const email = useRef(null)
  const phone = useRef(null)
  const zip = useRef(null)
  const relation = useRef(null)
  const program = useRef(null)
  const insurance = useRef(null)
  const date = useRef(null)
  const message = useRef(null)

  const form = useRef(null)
 
  function get_value(element: any){
      return (element.current!.value).length > 0?element.current!.value:undefined
  }
  function submit_form(){
    const res = {
      name: get_value(name),
      email: get_value(email),
      phone: get_value(phone),
      zip: get_value(zip),
      relation: get_value(relation),
      program: get_value(program),
      insurance: get_value(insurance),
      date: get_value(date),
      message: get_value(message),
    } as email;
    console.log(res)
    console.log("hello")
  }
  return (
    <div className={style.container_parent} >
      
      <div className={style.container}>
        <div>
          <label>First and last name*</label>
          <input placeholder="eg. John Doe" type="text" name="name" ref={name} required/>
        </div>
        <div>
          <label>Email Address*</label>
          <input placeholder="eg johndoe@mail.com" type="email" name="email"  ref={email}  required/>
        </div>
        <div>
          <label>Phone*</label>
          <input placeholder="(123) 456-7890" type="phone" name="phone"  ref={phone}  required />
        </div>
        <div>
          <label>Zip Code</label>
          <input placeholder="12345" type="number" name="zip"  ref={zip}   />
        </div>
        <div>
          <label>Relation to client*</label>
          <select placeholder="Relation to client" name="relation" ref={relation} required>
            <option value={""}>select</option>
            <option value={"Self"}>Self</option>
            <option value={"Parent?Guardian"}>Parent/Guardian</option>
            <option value={"Referring Clinician"}>Referring Clinician</option>
            <option value={"Other"}>Other</option>
          </select>
        </div>
        <div>
          <label>Program Interest</label>
          <select placeholder="Which Program Interests You?" name="program" ref={program}>
            <option value={""}>select</option>
            <option value={"IOP"}>IOP</option>
            <option value={"PHP"}>PHP</option>
            <option value={"Outpatient"}>Outpatient</option>
            <option value={"Unsure"}>Unsure</option>
          </select>
        </div>
        <div>
          <label>insurance Carrier</label>
          <input placeholder="eg Mercy Care" type="text" name="insurance" ref={insurance}/>
        </div>
        <div>
          <label>Preferred Admission Date</label>
          <input type="date" name="date" ref={date}/>
        </div>
        <div>
          <label>Message</label>
        </div>
      </div>
      <div className={style.container_parent__bottom}>
        <textarea placeholder="message" cols={8} name="message" ref={message}/>
        <div>
          <button type="submit" onClick={()=>{submit_form()}}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
