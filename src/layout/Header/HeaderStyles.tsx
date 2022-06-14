import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "right",
      alignItems: "center",
      background: "#fff",
      paddingRight: "24px",
      height: "96px",
      [theme.breakpoints.down(840)]: {
        justifyContent: "space-between",
        height: "64px",
      },
    },
    menu: {
      display: "none",
      color: "#475b69",
      [theme.breakpoints.down(840)]: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "12px",
      },
      "& i": {
        cursor: "pointer",
        fontSize: "24px",
        lineHeight: "24px",
      },
    },
    logoImg: {
      width: "136px",
      height: "36px",
      marginLeft: "12px",
      cursor: "pointer",
      [theme.breakpoints.down(475)]: {
        display: "none",
      },
    },
    searchRoot: {
      marginLeft: "12px",
      width: "calc(100% - 348px)",
      height: "50px",
      padding: "0 24px",
      display: "flex",
      background: "#ebeff2",
      borderRadius: "25px",
      alignItems: "center",
      minWidth: "200px",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      [theme.breakpoints.down(840)]: {
        width: "100%",
        height: "36px",
      },
      // [theme.breakpoints.down(475)]: {
      // },
    },
    searchIcon: {
      "& i": {
        fontSize: "21px",
        lineHeight: "28px",
        color: "#9ab0bc",
        [theme.breakpoints.down(840)]: {
          fontSize: "14px",
          lineHeight: "18px",
        },
      },
    },
    searchInput: {
      color: "#9ab0bc",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "16px",
      fontWeight: 400,
      height: "auto",
      lineHeight: "1.4",
      margin: "0px 0px 0px 12px",
      textAlign: "center",
      textOverflow: "ellipsis",
      overflow: "hidden",
      [theme.breakpoints.down(840)]: {
        fontSize: "14px",
      },
    },
  })
);
