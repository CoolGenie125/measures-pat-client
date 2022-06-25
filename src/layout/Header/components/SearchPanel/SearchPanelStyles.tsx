/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      width: "100%",
      height: "300px",
      zIndex: 5,
      top: 0,
      left: 0,
      background: "#fff",
      transform: "translate(0px, 0px)",
      transitionDelay: "0ms",
      transitionDuration: "0ms",
    },
    searchBtn: {
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "24px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
    },
    searchInput: {
      width: "fit-contents",
      background: "transparent",
      color: "#9ab0bc",
      fontFamily: "Lato",
      fontSize: "24px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      border: "1px solid transparent",
      borderRadius: "4px",
      textAlign: "left",
      padding: "14px 10px",
      boxShadow: "none",
      transitionDelay: "400ms",
      transitionDuration: "1000ms",
      boxSizing: "border-box",
      "&::placeholder": {
        fontFamily: "Lato",
        fontSize: "24px",
        fontWeight: 600,
        letterSpacing: "0.15em",
        lineHeight: "1.4",
        color: "#9ab0bc",
        opacity: 1 /* Firefox */,
      },
      "&:focus-visible": {
        outline: "none",
      },
      "&:focus": {
        outline: "none",
      },
    },
    closeIcon: {
      position: "absolute",
      top: 24,
      right: 28,
      cursor: "pointer",
      "& i": {
        color: "#333",
        fontSize: "24px",
        lineHeight: "24px",
      },
    },
    closePart: {
      position: "fixed",
      width: "100%",
      top: 300,
      left: 0,
      height: "calc(100% - 300px)",
      backgroundColor: "rgb(0, 0, 0, 0.2)",
      boxSizing: "border-box",
      zIndex: 5,
    },
    displayNone: {
      display: "none",
    },
  })
);
