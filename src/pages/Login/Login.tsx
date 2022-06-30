import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./LoginStyle";

export const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [personEmail, setPersonEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    let inputProps: any = {
      person_email: personEmail,
      password: password,
    };
    console.log("login value: ", inputProps);
  };

  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.modalRoot}>
        <div className={classes.title}>ログインする</div>
        <div className={classes.mainContainer}>
          {/* <div className={classes.descContainer}>
            以下の入力を正確に記入してください
          </div> */}
          <div className={classes.form}>
            <div className={classes.formTitle}>個人的なメール</div>
            <ActionInput
              value={personEmail}
              action={(e) => setPersonEmail(e)}
              placeholder='example@shisaku-pad.co.jp'
            />
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>パスワード</div>
            <ActionInput
              value={password}
              type='password'
              action={(e) => setPassword(e)}
              placeholder='********'
            />
          </div>
        </div>
        <div className={classes.btnContainer}>
          <ActionButton
            content='キャンセル'
            className={classes.cancelBtn}
            action={() => {}}
          />
          <ActionButton
            content='登録'
            type='dark'
            className={classes.confirmBtn}
            action={handleNext}
          />
        </div>
      </div>
    </div>
  );
};
