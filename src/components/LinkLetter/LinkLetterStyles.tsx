import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const LinkLetterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "center",
      padding: "0px",
      transitionDelay: "300ms",
      transitionDuration: "800ms",
      display: "flex",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.5,
        transitionDelay: "0ms",
        transitionDuration: "600ms",
        "& $moreIcon": {
          transform: "translate(6px, 0px)",
          transitionDelay: "0ms",
          transitionDuration: "600ms",
        },
      },
    },
    seeMoreLetter: {
      color: "000000",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      textAlign: "left",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      width: "auto",
      maxWidth: "100%",
      justifyContent: "flex-start",
      marginRight: "5px",
      "&:hover": {
        color: "#9ab0bc !important",
      },
      [theme.breakpoints.down(540)]: {
        fontSize: "12px",
      },
    },
    moreIcon: {
      fontSize: "11px",
      lineHeight: "13px",
    },
  })
);
