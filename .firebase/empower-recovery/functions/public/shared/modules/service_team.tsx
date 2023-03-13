import { italics } from "../models/italics";
import { italic } from "./italics";
import { services_data } from "./services";
import { team_data } from "./team";

export const service = {
  title: {
    text: `The ${italic} we offer`,
    italics: ["services"]
  } as italics,
  list: services_data
};

export const team = {
  title: {
    text: `Our ${italic} includes`,
    italics: ["team"]
  } as italics,
  list: team_data
};
