import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const LayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      background: "#ebeff2",
      width: "calc(100% - 300px)",
      marginLeft: "300px",
      minHeight: "calc(100vh - 163px)",
      [theme.breakpoints.down(840)]: {
        width: "100%",
        marginLeft: 0,
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    displayShow: {
      display: "unset !important",
    },
  })
);
