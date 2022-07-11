import { Grid } from "@material-ui/core";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { useLocation } from "react-router-dom";
import { UsageCard } from "./component/UsageCard/UsageCard";
import { UsageStyles } from "./UsageStyle";

export const Usage = () => {
  const classes = UsageStyles();
  const location = useLocation();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.usageTitle}>利用方法</div>
        <UsageCard />
        <UsageCard />
        <UsageCard />
        <UsageCard />
        <UsageCard />
      </div>
      <Breadcrumbs content={location.pathname} />
    </>
  );
};
