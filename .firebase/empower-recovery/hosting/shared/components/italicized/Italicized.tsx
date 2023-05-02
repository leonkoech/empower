import { italic, bold } from "../../modules/italics";
import { italics } from "../../models/italics";
type props={
  word: italics
}
const Italicized = ({word}: props) => {
  let content = word.text.split(" ");
  let italic_list = word.italics
  let bold_list = word.bold ?? ['']
  let italic_count = -1
  let bold_count = -1
  return (
    <span>
      {content.map((val: string, index: number) => {
        if (val === italic) {
          italic_count++
          return <i key={index}> {italic_list[italic_count]} </i>;
        } 
        else if (val === bold) {
          bold_count++
          return <strong key={index}> {bold_list[bold_count]} </strong>;
        }
        else {
          return ` ${val}`;
        }
      })}
    </span>
  );
};
export default Italicized;
