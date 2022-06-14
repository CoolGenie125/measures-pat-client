import ActionButton from "components/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { ErrorRouteStyles } from "./ErrorRouteStyle";

export const ErrorRoute = () => {
  const classes = ErrorRouteStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.errorRouteTitle}>404 not found</div>
        <div className={classes.errorRouteSmallTitle}>
          お探しのページは見つかりませんでした。
        </div>
        <ActionButton
          type='dark'
          content='HOME へ戻る'
          action={() => navigate("/")}
        />
      </div>
    </div>
  );
};
