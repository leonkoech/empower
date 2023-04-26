import { italics } from "../models/italics";
import { italic } from "./italics";
import { services_data } from "./services";

export const service = {
  title: {
    text: `The ${italic} we offer`,
    italics: ["services"]
  } as italics,
  list: services_data
};

