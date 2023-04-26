import { contacts } from "../models/contacts";
import { italics } from "../models/italics";
import { italic } from "./italics";

export const contact_data: contacts[] = [
  {
    title: "general",
    list: ["Office (602) 675-4791","After Hours - (602) 284-7422", "4857 W Van Buren St, Suite 250", "Phoenix, Arizona 85043", "info@empowerre.com", "www.empowerre.com"]
  },
  {
    title: "hours",
    list: [ "MONDAY 8 AM- 5 PM", "TUESDAY 8 AM- 5 PM", "WEDNESDAY 8 AM- 5 PM", "THURSDAY 8 AM- 5 PM", "FRIDAY 8 AM- 5 PM", "WEEKEND BY APPOINTMENT ONLY"]
  }
];

export const contact_title: italics = {
  text: `${italic} to us`,
  italics: ["Reach Out"]
};
