import { BreadcrumbsStyles } from "./BreadcrumbsStyles";

export default function Breadcrumbs() {
  const classes = BreadcrumbsStyles();

  return (
    <div className={classes.root}>
      <div className={classes.homeLink}>HOME</div>
      <div className={classes.link}>
        <i className='far fa-angle-right'></i>
        アカウント情報
      </div>
    </div>
  );
}
