import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const HeathlyStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ebeff2",
      padding: "48px",
      boxSizing: "border-box",
      transitionDelay: "400ms",
      transitionDuration: "1200ms",
    },
    header: {
      display: "flex",
      justifyContent: "flex-start",
      height: "96px",
      alignItems: "center",
      padding: "0 12px",
      boxSizing: "border-box",
      [theme.breakpoints.down(840)]: {
        justifyContent: "space-between",
      },
    },
    headerTitle: {
      textAlign: "left",
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: 1,
      minWidth: "236px",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      [theme.breakpoints.down(500)]: {
        minWidth: "100px",
        fontSize: "20px",
        marginRight: "10px",
      },
    },
    smallTitle: {
      [theme.breakpoints.down(840)]: {
        display: "none",
      },
    },
    smallTitltFont: {
      textAlign: "center",
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 980,
      height: "auto",
      lineHeight: 1.2,
      borderBottom: "2px solid #55727e",
      padding: "0 0 12px 0",
      margin: "0 48px 0 0",
      minWidth: "100px",
    },
    categoryHeaderRoot: {
      display: "flex",
      flexFlow: "nowrap",
      overflowX: "scroll",
      [theme.breakpoints.down(840)]: {
        display: "none",
      },
    },
    categoryHeaderContainer: {
      display: "flex",
    },
    categoryTitle: {
      textAlign: "left",
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "16px",
      fontWeight: 980,
      height: "auto",
      lineHeight: 1.2,
      marginRight: "48px",
      wordBreak: "keep-all",
      cursor: "pointer",
    },
    menu: {
      display: "none",
      fontSize: "36px",
      lineHeight: "36px",
      color: "#55727e",
      cursor: "pointer",
      [theme.breakpoints.down(840)]: {
        display: "unset",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(500)]: {
        fontSize: "20px",
        lineHeight: "20px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    categoryModal: {
      position: "fixed",
      width: "70%",
      padding: "24px",
      height: "100%",
      background: "#fff",
      zIndex: 1000,
    },
  })
);
