import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalRoot: {
    padding: "24px",
    position: "fixed",
    width: "70%",
    background: "#ffffff",
    textAlign: "center",
    zIndex: 99999,
    maxHeight: "calc(100vh - 32px)",
    overflow: "auto",
    [theme.breakpoints.up(540)]: {
      height: "100%",
      width: "300px",
      left: 0,
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "48px",
  },
  closeIcon: {
    "& i": {
      fontSize: "36px",
      lineHeight: "36px",
      cursor: "pointer",
    },
  },
  logoImg: {
    width: "167px",
    height: "44px",
  },
  modalTitle: {
    color: "#55727e",
    fontSize: "18px",
    height: "25px",
    marginTop: 0,
    marginBottom: "24px",
    width: "100%",
    textAlign: "center",
  },
  modalItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "44px",
    padding: "0 12px",
    borderBottom: "1px solid #eeeeee",
  },
  itemTitle: {
    color: "#9ab0bc",
    fontFamily: "ヒラギノ角ゴ W6 JIS2004",
    fontSize: "16px",
    fontWeight: 600,
    height: "auto",
    letterSpacing: "0.15em",
    lineHeight: 1.4,
    padding: "0px 12px 0px",
  },
  itemIcon: {
    "& i": {
      color: "#9ab0bc",
      fontSize: "24px",
      lineHeight: "20px",
    },
  },
}));
