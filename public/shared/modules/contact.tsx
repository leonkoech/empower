import { contacts } from "../models/contacts";
import { italics } from "../models/italics";
import { italic } from "./italics";
import { images } from "./images";

export const office  = "(602) 675-4791";
export const after_hours = "(602) 284-7422";
export const email = "info@empowerrc.com"

export const contact_data: contacts[] = [
  {
    title: "general",
  list: [`Office ${office}`,`After Hours ${after_hours}`, "4857 W Van Buren St, Suite 250", "Phoenix, Arizona 85043", `${email}`, "www.empowerrc.com"]
  },
  {
    title: "hours",
    list: [ "MONDAY 9 AM- 1 PM", "TUESDAY 9 AM- 1 PM", "WEDNESDAY 9 AM- 1 PM", "THURSDAY 9 AM- 1 PM", "FRIDAY 9 AM- 1 PM", "WEEKEND BY APPOINTMENT ONLY"]
  }
];

export const contact_title: italics = {
  text: `${italic} to us`,
  italics: ["Reach Out"],
  bold: undefined,
};

export const map_title: italics = {
  text: `Our ${italic}`,
  italics: ["Office Location "],
  bold: undefined,
};


export const contact_card = {
  title: {
      text: "Why Contact Us",
      italics: [],
      bold: []
  } as italics,
  cards: [
      {
          image: images.hand_stop.src,
          text: {
              text: "No Obligation to Enter Treatment",
              italics: [],
              bold: []
          } as italics
      },
      {
          image: images.clipboard.src,
          text: {
              text: "Free Confidential Assessment",
              italics: [],
              bold: []
          } as italics
      },
      {
          image: images.headphones.src,
          text: {
              text: "Caring Admissions Counselors",
              italics: [],
              bold: []
          } as italics
      }

  ]
}


export const coa = {
  description: "24/7 free admissions call",
  icon:  images.phone.src,
  title: after_hours
}