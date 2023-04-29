import { italics } from "../models/italics";
import { italic } from "./italics";
import { housing, housing_details } from "./housing";


export const housing_tab = {
    title: {
      text: `${italic} `,
      italics: ["housing"]
    } as italics,
    list: housing,
    details:  housing_details
  };