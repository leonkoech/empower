import { italic } from "../../modules/italics";
import { italics } from "../../models/italics";
type props={
  word: italics
}
const Italicized = ({word}: props) => {
  let content = word.text.split(" ");
  let italic_cpy = word.italics
  return (
    <span>
      {content.map((val: string, index: number) => {
        if (val === italic) {
          let test = italic_cpy[0]
          return <i key={index}> {test} </i>;
        } else {
          return ` ${val}`;
        }
      })}
    </span>
  );
};
export default Italicized;
