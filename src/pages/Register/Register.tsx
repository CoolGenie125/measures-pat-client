import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "store/auth";
import { useStyles } from "./RegisterStyle";

export const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [personEmail, setPersonEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  //---input img function------------------
  const inputFile = useRef<HTMLInputElement>(null);
  const [importImg, setImportImg] = useState<any>();

  const onImgImport = ({
    currentTarget: { files, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length && name === "importImg") setImportImg(files[0]);
  };

  const handleFileInput = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const handleNext = () => {
    const formData = new FormData();
    formData.append("surname", surname);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("avatar", importImg);
    formData.append("person_email", personEmail);
    formData.append("password", password);
    formData.append("repasswor", repassword);
    console.log("register : ", formData);

    dispatch(registerUser(formData));
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.modalRoot}>
        <div className={classes.title}>登録</div>
        <div className={classes.mainContainer}>
          <div className={classes.descContainer}>
            以下の入力を正確に記入してください
          </div>
          <div className={classes.imgLoaderRoot}>
            <div className={classes.imgLoader} onClick={handleFileInput}>
              <input
                id='fileimport'
                name='importImg'
                accept='image/*'
                type='file'
                autoComplete='off'
                tabIndex={-1}
                style={{ display: "none" }}
                ref={inputFile}
                onChange={onImgImport}
              />
              {importImg ? (
                <img
                  src={URL.createObjectURL(importImg)}
                  alt='image'
                  className={classes.importImg}
                />
              ) : (
                <div className={classes.importLetter}>
                  アバターを選択してください
                </div>
              )}
            </div>
          </div>
          <div className={classes.inLine}>
            <div className={classes.form}>
              <div className={classes.formTitle}>姓</div>
              <ActionInput
                value={surname}
                action={(e) => setSurname(e)}
                placeholder='しさく'
              />
            </div>
            <div className={classes.form}>
              <div className={classes.formTitle}>名前</div>
              <ActionInput
                value={name}
                action={(e) => setName(e)}
                placeholder='くらら'
              />
            </div>
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>電話</div>
            <ActionInput
              value={phone}
              action={(e) => setPhone(e)}
              placeholder='0X0-1234-5678'
            />
          </div>
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
          <div className={classes.form}>
            <div className={classes.formTitle}>パスワードを認証する</div>
            <ActionInput
              type='password'
              value={repassword}
              action={(e) => setRepassword(e)}
              placeholder='********'
            />
          </div>
        </div>
        <div className={classes.btnContainer}>
          <ActionButton
            content='キャンセル'
            className={classes.cancelBtn}
            action={handleCancel}
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
