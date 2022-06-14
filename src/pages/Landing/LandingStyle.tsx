import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import serviceBackground1 from "assets/images/service1.png";
import serviceBackground2 from "assets/images/service2.png";
import landBackground from "assets/images/landing-background.png";

export const LandingStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
    },
    landingImgRoot: {
      position: "relative",
      backgroundImage: `url(${landBackground})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textAlign: "left",
      [theme.breakpoints.down(1140)]: {
        textAlign: "right",
      },
      [theme.breakpoints.down(540)]: {
        textAlign: "left",
      },
    },
    landingLetter: {
      width: "368px",
      height: "150px",
      padding: "288px 48px 96px",
      transition: ".3scubic-bezier(.4,.4,0,1)",
      [theme.breakpoints.down(540)]: {
        padding: "192px 24px 48px",
        transform: "translate(1px, 2px)",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
        width: "50%",
        height: "auto",
      },
    },
    popularRankingRoot: {
      padding: "48px",
    },
    popularRankingTitleContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "48px",
    },
    popularRankingLeft: {
      display: "flex",
      alignItems: "center",
    },
    kingIcon: {
      fontSize: "24px",
      marginLeft: "12px",
    },
    popularRankingTitleLetter: {
      color: "#000000",
      fontFamily: "Montserrat",
      fontSize: "32px",
      fontWeight: 600,
      height: "auto",
      lineHeight: 1,
      margin: "0px 0px 0px 0px",
      padding: "0px 0px 0px 12px",
      textAlign: "left",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
      width: "auto",
      maxWidth: "100%",
      justifyContent: "flex-start",
      [theme.breakpoints.down(840)]: {
        fontSize: "48px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(540)]: {
        fontSize: "28px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
      [theme.breakpoints.down(440)]: {
        fontSize: "18px",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    CardContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    serviceRoot: {
      padding: "48px",
      background: "#9ab0bc",
    },
    services: {
      width: "100%",
    },
    serviceWrap: {
      height: "520px",
      overflow: "hidden",
      borderRadius: "10px",
      position: "relative",
      [theme.breakpoints.down(1140)]: {
        height: "400px",
      },
      [theme.breakpoints.down(840)]: {
        height: "320px",
      },
      [theme.breakpoints.down(540)]: {
        height: "240px",
      },
    },
    service1: {
      cursor: "pointer",
      height: "520px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      overflow: "hidden",
      position: "relative",
      zIndex: 0,
      transform: "scale(1, 1)",
      transitionDelay: "300ms",
      transitionDuration: "3000ms",
      transitionTimingFunction: "ease-in-out",
      "&::before": {
        backgroundImage: `url(${serviceBackground1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.7)",
        content: `""`,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: "inherit",
        zIndex: "-2",
        pointerEvents: "none",
        transition: "inherit",
      },
      "&:hover": {
        transition: ".3s cubic-bezier(.4,.4,0,1)",
        transform: "translate(0px, 0px) scale(1.05, 1.05)",
        transitionDelay: "200ms",
        transitionDuration: "200ms",
      },
      [theme.breakpoints.down(1140)]: {
        height: "400px",
      },
      [theme.breakpoints.down(840)]: {
        height: "320px",
      },
      [theme.breakpoints.down(540)]: {
        height: "240px",
      },
    },
    service2: {
      cursor: "pointer",
      height: "520px",
      boxShadow: "40px 50px 30px rgb(0 0 0 / 10%)",
      overflow: "hidden",
      position: "relative",
      zIndex: 0,
      transform: "scale(1, 1)",
      transitionDelay: "300ms",
      transitionDuration: "3000ms",
      transitionTimingFunction: "ease-in-out",
      "&::before": {
        backgroundImage: `url(${serviceBackground2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.7)",
        content: `""`,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: "inherit",
        zIndex: "-2",
        pointerEvents: "none",
        transition: "inherit",
      },
      "&:hover": {
        transition: ".3s cubic-bezier(.4,.4,0,1)",
        transform: "translate(0px, 0px) scale(1.05, 1.05)",
        transitionDelay: "200ms",
        transitionDuration: "200ms",
      },
      [theme.breakpoints.down(1140)]: {
        height: "400px",
      },
      [theme.breakpoints.down(840)]: {
        height: "320px",
      },
      [theme.breakpoints.down(540)]: {
        height: "240px",
      },
    },
    serviceTitle: {
      marginTop: "48px",
      color: "#fff",
      fontFamily: "ヒラギノ角ゴ W6 JIS2004",
      fontSize: "64px",
      fontWeight: 600,
      letterSpacing: "0.15em",
      lineHeight: "1.4",
      marginBottom: "96px",
      padding: "0 24px",
      [theme.breakpoints.down(1140)]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down(840)]: {
        fontSize: "28px",
        marginBottom: "48px",
      },
      [theme.breakpoints.down(540)]: {
        fontSize: "18px",
        marginTop: "24px",
        marginBottom: "24px",
      },
    },
    serviceBtn: {
      marginLeft: "24px",
      [theme.breakpoints.down(540)]: {
        margin: "0 auto",
      },
    },
    slideRoot: {
      background: "#1e5a9f",
      flex: "none",
      height: "100%",
      margin: "0 0 0 0",
      width: "100%",
      maxWidth: "100%",
      zIndex: 2,
      top: "0px",
      bottom: "NaNpx",
      right: "NaNpx",
      left: "0px",
      position: "absolute",
    },
  })
);
