import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "store/auth";
import { useStyles } from "./LoginStyle";

export const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  const [personEmail, setPersonEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    const formData = new FormData();
    formData.append("email", personEmail);
    formData.append("password", password);
    dispatch(loginUser(formData));
  };

  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.modalRoot}>
        <div className={classes.title}>ログインする</div>
        <div className={classes.mainContainer}>
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
