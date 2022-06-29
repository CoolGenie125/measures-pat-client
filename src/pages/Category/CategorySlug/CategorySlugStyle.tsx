import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ebeff2",
      padding: "96px 48px 96px 48px",
      boxSizing: "border-box",
      [theme.breakpoints.down(840)]: {
        padding: "96px 24px 96px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    container: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      padding: "96px",
      [theme.breakpoints.down(840)]: {
        padding: "48px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        padding: "24px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    headerRoot: {
      display: "flex",
      alignItems: "center",
      marginBottom: "48px",
    },
    logoImg: {
      width: "100px",
      height: "30px",
    },
    title: {
      color: "#55727e",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4,
      marginLeft: "48px",
    },
    serviceImg: {
      width: "100%",
      marginBottom: "48px",
    },
    descriptionRoot: {
      margin: "0 0 48px 0",
    },
    descriptionTitle: {
      display: "flex",
      alignItems: "center",
      height: "50px",
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: 1.4,
      background: "#55727e",
      marginBottom: "24px",
      padding: "0 0 0 12px",
    },
    descriptionTopic: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: "24px",
      padding: "0 0 0 12px",
      borderBottom: "1px solid #55727e",
      height: "29px",
    },
    description: {
      display: "flex",
      marginBottom: "48px",
    },
    leftPart: {
      width: "50%",
    },
    smallTopicItem: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: 1.4,
      display: "flex",
      alignItems: "center",
      margin: "0 0 12px 12px",
      "& i": {
        fontSize: "14px",
        lineHeight: "14px",
        color: "#DB5C57",
        marginRight: "12px",
        transform: "rotate(45deg)",
      },
    },
    rightPart: {
      width: "50%",
    },
    rightPartImg: {
      width: "100%",
    },
    detail: {
      color: "#000",
      fontFamily: "ヒラギノ角ゴ W3 JIS2004",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    widthLittle: {
      width: "250px",
    },
    formBtn: {
      margin: "auto",
    },
  })
);
