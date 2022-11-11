import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle(() => ({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "'Segoe UI', sans-serif",
    outline: "none",
  },

  body: {
    background: "#FAFAFA",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  ul: {
    listStyle: "none",
  },

  img: {
    objectFit: "cover",
    objectPosition: "center",
  },

  ".relative": {
    position: "relative",
  },

  ".container": {
    width: "975px",
    maxWidth: "975px",
    padding: "0 20px",
    margin: "0 auto",
  },

  "@media (max-width: 1000px)": {
    ".container": {
      width: "100%",
    },
  },

  "input, button": {
    border: "none",
    background: "none",
    outline: "none",
  },

  button: {
    cursor: "pointer",
  },

  ".mt-90": {
    marginTop: "90px",
  },

  ".img-box img": {
    width: "100%",
    height: "100%",
  },
}));

export default GlobalStyle;
