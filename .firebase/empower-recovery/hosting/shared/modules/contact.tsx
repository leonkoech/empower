import { contacts } from "../models/contacts";
import { italics } from "../models/italics";
import { italic } from "./italics";

export const contact_data: contacts[] = [
  {
    title: "general",
    list: ["(602) 2847-422", "info@empowerre.com", "www.empowerre.com"]
  },
  {
    title: "physical",
    list: ["4857 W Van Buren St", "Suite 250", "Phoenix, Arizona 85043"]
  }
];

export const contact_title: italics = {
  text: `${italic} to us`,
  italics: ["Reach Out"]
};
