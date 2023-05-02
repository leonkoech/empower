import Italicized from "../../italicized/Italicized";
import style from "./Form.module.scss";
import { italic } from "../../../modules/italics";

const Form = () => {
  return (
    <div className={style.container_parent}>
      
      <div className={style.container}>
        <div>
          <label>First and last name*</label>
          <input placeholder="eg. John Doe" type="text" />
        </div>
        <div>
          <label>Email Address*</label>
          <input placeholder="eg johndoe@mail.com" type="email" />
        </div>
        <div>
          <label>Phone*</label>
          <input placeholder="(123) 456-7890" type="phone" />
        </div>
        <div>
          <label>Zip Code</label>
          <input placeholder="12345" type="number" />
        </div>
        <div>
          <label>Relation to client*</label>
          <select placeholder="Relation to client">
            <option value={""}>select</option>
            <option value={"Self"}>Self</option>
            <option value={"Parent?Guardian"}>Parent/Guardian</option>
            <option value={"Referring Clinician"}>Referring Clinician</option>
            <option value={"Other"}>Other</option>
          </select>
        </div>

        <div>
          <label>Program Interest</label>
          <select placeholder="Which Program Interests You?">
            <option value={""}>select</option>
            <option value={"IOP"}>IOP</option>
            <option value={"PHP"}>PHP</option>
            <option value={"Outpatient"}>Outpatient</option>
            <option value={"Unsure"}>Unsure</option>
          </select>
        </div>
        <div>
          <label>insurance Carrier</label>
          <input placeholder="eg Mercy Care" type="text" />
        </div>
        <div>
          <label>Preferred Admission Date</label>
          <input placeholder="eg johndoe@mail.com" type="date" />
        </div>
        <div>
          <label>Message</label>
        </div>
      </div>
      <div className={style.container_parent__bottom}>
        <textarea placeholder="message" cols={8} />
        <div>
          <button>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
