import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const BreadcrumbsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      position: "relative",
      background: "#fff",
      marginLeft: 0,
      width: "100%",
      padding: "24px 0",
      justifyContent: "flex-start",
      transition: ".3s cubic-bezier(.4,.4,0,1)",
      transitionDelay: "200ms",
      transitionDuration: "200ms",
      boxSizing: "border-box",
    },
    homeLink: {
      color: "#aaaaaa",
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      marginLeft: "48px",
    },
    link: {
      color: "#55727e",
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      "& i": {
        fontSize: "16px",
        color: "#55727e",
        lineHeight: "10px",
        margin: "0 12px",
      },
    },
  })
);
