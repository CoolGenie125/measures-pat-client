import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  displayNone: {
    display: "none",
  },
  loaderWrapper: {
    position: "fixed",
    zIndex: 99998,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    overflowY: "scroll",
    padding: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalRoot: {
    padding: "30px 35px",
    boxSizing: "border-box",
    width: "620px",
    height: "fit-content",
    background: "#fff",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    margin: "auto",
    [theme.breakpoints.down(769)]: {
      minWidth: "100% !important",
      width: "100% !important",
    },
  },
  
  title: {
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "50px",
    color: "#55727e",
  },
  mainContainer: {
    padding: "0px 50px",
    [theme.breakpoints.down(540)]: {
      padding: 0,
    },
  },
  descContainer: {
    color: "#000",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "30px",
  },
  btnContainer: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down(570)]: {
      display: "block",
    },
  },
  cancelBtn: {
    width: "100% !important",
    marginBottom: "20px",
    marginRight: "15px",
  },
  confirmBtn: {
    marginBottom: "20px",
    width: "100% !important",
    [theme.breakpoints.down(570)]: {
      marginLeft: "0px",
    },
  },
  form: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  formTitle: {
    minWidth: "100px",
    marginRight: "5px",
    color: "#000",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    textAlign: "center",
  },
  formInput: {
    color: "#000",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    textAlign: "center",
  },
  imgLoaderRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
  },
  imgLoader: {
    width: "50%",
    border: "1px dashed #dddddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&::before": {
      content: `""`,
      float: "left",
      paddingBottom: "90%",
      [theme.breakpoints.down(540)]: {
        paddingBottom: "90%",
        transitionDelay: "300ms",
        transitionDuration: "1000ms",
      },
    },
    [theme.breakpoints.down(540)]: {
      width: "100%",
      transitionDelay: "300ms",
      transitionDuration: "1000ms",
    },
  },
  importLetter: {
    color: "#000",
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: 400,
    margin: "10px",
  },
  importImg: {
    width: "100%",
    height: "100%",
  },
  inLine:{
    display:"flex",
  },
})
);
