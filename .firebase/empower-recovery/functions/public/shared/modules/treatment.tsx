import { italics } from "../models/italics"
import { italic, bold} from "./italics";

export const treatment_data: string[]=[
"CBT",
"DBT",
"Motivational Interviewing",
"Family Integration",
"Group Therapy",
"Field Trips",
"Community Service",
"Health and Wellness Activities",
"Art Therapy",
"Yoga"
]

export const treatment_details: italics[] = [
    {   text: `To guarantee continuity of care, we offer three levels \
    of treatment: ${bold} , ${bold} , and ${bold}`,
        italics: [""],
        bold: ["Partial hospitalization program","Intensive Outpatient Program", "Outpatient services"]
      } as italics,
    {   text: `Our ${italic} is our highest level of care. The program typically meets 6 hours a day. 6-7 day a week, and lasts 12 weeks.\
                This program is ideal for people transitioning from a residential inpatient facility whi need more support\
                and, intensive therapy
    `,
        italics: ["PHP (Partial Hospitalization Program)"],
        bold:[""]
      } as italics,
      {
        text: `Our ${italic} program meets 3-6 hours a day up to 5 days a week, depending on individual needs. To successfully graduate,\
               clients must attend for 12 weeks. This program who need structure yet continue working and attending school part-time\
               `,
        italics: ["IOP (Intensive Outpatient Program"],
        bold: undefined,
      }as italics,
      {
        text: `Our lowest intensity level is our ${italic} or ${italic} . This program meets 3 hours a day for three days a week. \
        This level of care is ideal for people who need little support as they transition back into fully independent living. 
        `,
        italics: ["OP", "Outpatient Program"],
        bold: undefined,
      }as italics,
    ]
