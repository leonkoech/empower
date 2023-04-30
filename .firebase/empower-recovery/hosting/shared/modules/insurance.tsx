import { italic, bold } from "./italics";
import { italics } from "../models/italics";

const insurance_title:italics = {
    text:`${italic}`,
    italics: ["Insurance"],
    bold:[]
}
const insurance_description:italics = {
    text:`We strive to make our services ${italic} to everyone. We are pleased to ${italic} and ${italic} .\
    We understand that some individuals may face financial challenges, and we want to help. That's why we work with you based on a sliding scale\
    to ensure everyone receives the care they need, regardless of financial situation. Call us today\
    `,
    italics: ["accessible", "accept most insurances" , "offer self-pay options" ],
    bold:[]
}

export const insurance_tab: any = {
    title: insurance_title,
    description: insurance_description
}