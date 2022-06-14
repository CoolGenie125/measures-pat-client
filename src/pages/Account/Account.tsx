import ActionButton from "components/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { AccountStyles } from "./AccountStyle";

export const Account = () => {
  const classes = AccountStyles();
  const navigate = useNavigate();

  const accountAction = ()=>{
    navigate("/account/setting")
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.accountTitle}>アカウント情報</div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>氏名</div>
          <div className={classes.formValue}>しさく くらら</div>
        </div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>会社名</div>
          <div className={classes.formValue}>合同会社施策ぱっと</div>
        </div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>電話番号</div>
          <div className={classes.formValue}>0X0-1234-5678</div>
        </div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>会社用メールアドレス</div>
          <div className={classes.formValue}>example@shisaku-pad.co.jp</div>
        </div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>個人用メールアドレス</div>
          <div className={classes.formValue}>example@gmail.com</div>
        </div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>パスワード</div>
          <div className={classes.formValue}>********</div>
        </div>
        <ActionButton
          type='dark'
          content='アカウント情報 編集'
          className={classes.formBtn}
          action={accountAction}
        />
      </div>
    </div>
  );
};
