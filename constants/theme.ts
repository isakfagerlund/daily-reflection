import { createTheme } from "@shopify/restyle";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",

  mainBlue: "#1E40AF",
  secondaryColor: "#D9D9D9",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.mainBlue,
    cardPrimaryBackground: palette.purplePrimary,
    primaryColor: "#1E40AF",
    secondaryColor: palette.secondaryColor,
    grey: "#8F8F8F",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xl2: 60,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 36,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      fontSize: 18,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
