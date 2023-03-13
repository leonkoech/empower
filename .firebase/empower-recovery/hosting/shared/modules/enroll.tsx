import { italic } from "./italics";
import { test_data } from "./about";
import { italics } from "../models/italics";
import { about } from "../models/about";

export const enroll_data: about = {
  title: {
    text: `How to ${italic}`,
    italics: ["enroll"]
  } as italics,
  details: test_data
};
