import { italic } from "../../modules/italics";
import { italics } from "../../models/italics";
type props={
  word: italics
}
const Italicized = ({word}: props) => {
  let content = word.text.split(" ");
  let italic_list = word.italics
  let count = -1
  return (
    <span>
      {content.map((val: string, index: number) => {
        if (val === italic) {
          count++
          return <i key={index}> {italic_list[count]} </i>;
        } else {
          return ` ${val}`;
        }
      })}
    </span>
  );
};
export default Italicized;
