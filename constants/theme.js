import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#FF615F",
  secondary: "#FF9600",

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#E8E6EA",
  lightGray2: "#F5F7F9",
  gray: "#BEC1D2",
  darkgray: "#898C95",
  blue: "#42B0FF",
  yellow: "#FFD573",
  orange: "#FFB347",
  lightBlue: "#95A9B8",
  darkgreen: "#008159",
  peach: "#FF615F",
  purple: "#8A2387",
  red: "#FF0000",
  lightred: "#fed7d7",
  green: "#22D197",


  lightGrayGradientLeft: "#d4d4d4", //	(212,212,212)
  lightGrayGradientRight: "#e9e9e9", // (233,233,233)

  darkGrayGradientLeft: "#9a9a9a", // (154,154,154)
  darkGrayGradientRight: "#707070", //		(112,112,112)

  lightPinkGradientLeft: "#ee9ca7",
  lightPinkGradientRight: "#ffdde1",

  darkPinkGradientLeft: "#ffafbd",
  darkPinkGradientRight: "#ffc3a0",

  orangeGradientLeft: "#de6262",
  orangeGradientRight: "#ffb88c",

  blueGradientLeft: "#2193b0",
  blueGradientRight: "#6dd5ed",

  blue2GradientLeft: "#06beb6",
  blue2GradientRight: "#48b1bf",

  greenGradientLeft: "#c8f6e7",
  greenGradientRight: "#dbf9ef",

  cherryGradientLeft: "#eb3349",
  cherryGradientRight: "#f45c43",

  tomatoGradientLeft: "#FF5858",
  tomatoGradientRight: "#ff9494",

  purpleGradientLeft: "#cc2b5e",
  purpleGradientRight: "#753a88",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55 },
  h1: { fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
