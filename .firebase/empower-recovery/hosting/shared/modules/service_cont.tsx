import { italics } from "../models/italics";
import { italic } from "./italics";
import { services_data } from "./services";

export const service = {
  title: {
    text: `${italic} we offer`,
    italics: ["Services"]
  } as italics,
  list: services_data
};

