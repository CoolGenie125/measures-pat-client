import clsx from "clsx";
import { LinkLetterStyles } from "./LinkLetterStyles";

export default function LinkLetter() {
  const classes = LinkLetterStyles();

  return (
    <div className={classes.root}>
      <span className={classes.seeMoreLetter}>もっと見る</span>
      <i className={clsx("fas fa-chevron-right", classes.moreIcon)}></i>
    </div>
  );
}
