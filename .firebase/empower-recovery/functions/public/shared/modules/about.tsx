import { italic } from "./italics";
import { about } from "../models/about";

export const about_text =
  "Empower Recovery Center LLC is an outpatient treatment program that services adults struggling with addiction and mental health disorders. We deliver quality, professional treatment services by helping our clients break the power of chemical dependency into leading healthy lives free from alcohol and drugs.\
  At Empower Recovery Center, we meet you where you’re at and help you discover who you were meant to be. All who seek change are welcome; regardless of race, ethnicity, religion or creed, gender, disability, sexual orientation or national origin";

export const Commitment_text = 
"At Empower Recovery Center, we pride ourselves in encouraging our clients to live to their greatest potential and find new ways to improve their well-being. We are committed to providing each person with individualized quality care. Our administrative team will also conduct procedures and performance reviews on\
 a continuous basis. Our main goal is to offer services that assist our clients with their healing process and to provide continuous aid to promote a happy and healthy lifestyle even beyond graduation."


export const about_data: about[] = [
  {
    title: {
      text: `About ${italic}`,
      italics: ["Empower"]
    },
    details: about_text
  },
  {
    title: {
      text: `Our ${italic}`,
      italics: ["Commitment"]
    },
    details: Commitment_text
  },
  // {
  //   title: {
  //     text: `Our ${italic}`,
  //     italics: ["Mission"]
  //   },
  //   details: test_data
  // }
];
