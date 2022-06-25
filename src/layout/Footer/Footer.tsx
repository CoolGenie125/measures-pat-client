import { FooterStyles } from "./FooterStyles";

export default function Footer() {
  const classes = FooterStyles();

  const handleCompanyAbout = () => {
    window.open(
      "https://corp.shisaku-pad.co.jp/company",
      "_blank"
    );
  };
  const handleCompanyPolicy = () => {
    window.open(
      "https://corp.shisaku-pad.co.jp/privacy-policy",
      "_blank"
    );
  };
  const handleCompanyTerm = () => {
    window.open(
      "https://corp.shisaku-pad.co.jp/terms",
      "_blank"
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.link} onClick={handleCompanyAbout}>
        運営会社
        <i className='far fa-external-link-alt'></i>
      </div>
      <div className={classes.link} onClick={handleCompanyPolicy}>
        プライバシーポリシー
        <i className='far fa-external-link-alt'></i>
      </div>
      <div className={classes.link} onClick={handleCompanyTerm}>
        ご利用規約
        <i className='far fa-external-link-alt'></i>
      </div>
      <div className={classes.imLink}>
        <p>©︎ Shisaku-pad Inc. All Right Reserved.</p>
      </div>
    </div>
  );
}
