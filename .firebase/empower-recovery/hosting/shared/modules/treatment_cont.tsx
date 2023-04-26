import { italics } from "../models/italics";
import { italic } from "./italics";
import { treatment_data } from "./treatment";


export const treatment = {
  title: {
    text: `Our ${italic} modalities `,
    italics: ["treatment"]
  } as italics,
  list: treatment_data
};
