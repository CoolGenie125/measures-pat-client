import { FooterStyles } from "./FooterStyles";

export default function Footer() {
  const classes = FooterStyles();

  return (
    <div className={classes.root}>
      <div className={classes.link}>
        運営会社
        <i className='far fa-external-link-alt'></i>
      </div>
      <div className={classes.link}>
        プライバシーポリシー
        <i className='far fa-external-link-alt'></i>
      </div>
      <div className={classes.link}>
        ご利用規約
        <i className='far fa-external-link-alt'></i>
      </div>
      <div className={classes.imLink}>
        <p>©︎ Shisaku-pad Inc. All Right Reserved.</p>
      </div>
    </div>
  );
}
