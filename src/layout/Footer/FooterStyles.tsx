import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const FooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      position: "relative",
      background: "#192225",
      margin: "0px 0px 0px 0px",
      width: "calc(100% - 300px)",
      marginLeft: "300px",
      padding: "24px 60px",
      justifyContent: "space-between",
      boxSizing: "border-box",
      [theme.breakpoints.down(1140)]: {
        zIndex: 3,
        marginLeft: 0,
        width: "100%",
      },
      [theme.breakpoints.down(840)]: {
        flexDirection: "column",
      },
    },
    link: {
      color: "#55727e",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 600,
      height: "auto",
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      cursor: "pointer",
      "& i": {
        color: "#55727e",
      },
      [theme.breakpoints.down(840)]: {
        marginBottom: "24px",
      },
    },
    imLink: {
      "& p": {
        color: "#55727e",
        fontFamily: "Josefin Sans",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0.15em",
        lineHeight: "1.4",
        margin: 0,
      },
      height: "50px",
      display: "flex",
      alignItems: "flex-end",
    },
  })
);
