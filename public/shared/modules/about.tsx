import { italic } from "./italics";
export const test_data =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
    mollit anim id est laborum.";

export const about_data = [
  {
    title:{
    text: `About ${italic}`,
    italics: ["Empower"]},
    details: test_data
  },
  {
    title:{
      text: `Our ${italic}`,
      italics: ["Vision"]},
    details: test_data
  },
  {
    title:{
      text: `Our Mission ${italic}`,
      italics: ["Mission"]},
    details: test_data
  }
];
