import { italics } from "../models/italics";
import { italic } from "./italics";
import { treatment_data, treatment_details } from "./treatment";


export const treatment = {
  title: {
    text: `Our ${italic} modalities `,
    italics: ["treatment"]
  } as italics,
  list: treatment_data
};

export const treatment_top = {
  title: {
    text: `Treatment ${italic}`,
    italics: ["Programs"]
  } as italics,
  details: treatment_details
};
