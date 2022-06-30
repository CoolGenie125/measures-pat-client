import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%",
      "& i": {
        position: "absolute",
        color: "#bdbdbd",
        fontSize: "20px",
        top: 17,
        right: 15,
      },
    },
    container: {
      cursor: "pointer",
      background: "#FFFFFF",
      border: "1px solid #eeeeee",
      borderRadius: "4px",
      boxShadow: "none",
      color: "#333333",
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: 400,
      height: "auto",
      lineHeight: 1.4,
      padding: "15px 10px 15px 10px",
      width: "100%",
      maxWidth: "100%",
      appearance: "none",
    },
  })
);
