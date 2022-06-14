import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const UsageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ebeff2",
      padding: "48px",
      boxSizing: "border-box",
      transitionDelay: "400ms",
      transitionDuration: "1200ms",
    },
    usageTitle: {
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "28px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1.4,
      margin: "0px 0px 48px 0px",
      textAlign: "left",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
    },
  })
);
