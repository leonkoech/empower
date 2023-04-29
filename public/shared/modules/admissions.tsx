import { italic, bold } from "./italics";
import { italics } from "../models/italics";

const admissions_title:italics = {
    text:`${italic}`,
    italics: ["Admissions"],
    bold:[]
}
const admissions_description:italics = {
    text:`All incoming clients must undergo an admissions process, including \
    ${italic} , ${italic} , and ${italic} . \
    Our first step is a free, confidential assessment. Call today to discuss \
    treatment options.`,
    italics: ["clinical assessment", "physical screening"  , "meeting with the care team" ],
    bold:[]
}

export const admissions_tab: any = {
    title: admissions_title,
    description: admissions_description
}