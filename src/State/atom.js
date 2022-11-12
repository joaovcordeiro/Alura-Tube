import { atom } from "recoil";
import { theme } from "../Theme/Theme";

export const themeState = atom({
  key: "themeState",
  default: theme.light,
});
