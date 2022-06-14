import ActionButton from "components/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { ThankYouStyles } from "./ThankYouStyle";

export const ThankYou = () => {
  const classes = ThankYouStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.thankYouTitle}>アカウント設定</div>
        <div className={classes.thankYouSmallTitle}>
          アカウントの設定が完了しました。
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
