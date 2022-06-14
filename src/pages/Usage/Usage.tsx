import { Grid } from "@material-ui/core";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { UsageCard } from "./component/UsageCard/UsageCard";
import { UsageStyles } from "./UsageStyle";

export const Usage = () => {
  const classes = UsageStyles();
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
      <Breadcrumbs />
    </>
  );
};
