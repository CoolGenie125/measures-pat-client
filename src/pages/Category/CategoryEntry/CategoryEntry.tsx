import ActionButton from "components/ActionButton/ActionButton";
import ActionSelect from "components/ActionSelect/ActionSelect";
import { useState } from "react";
import { useStyles } from "./CategoryEntryStyle";

export const CategoryEntry = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [cName, setCName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailSetting, setEmailSetting] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const selectItems = [
    "こちらからお選びください",
    "会社用メールアドレス",
    "個人用メールアドレス",
  ];

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleCName = (e: any) => {
    setCName(e.target.value);
  };
  const handlePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const handleSelect = (e: any) => {
    setEmailSetting(e);
  };
  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleInquiry = (e: any) => {
    setInquiry(e.target.value);
  };

  const handleSend = () => {
    console.log(
      "input values : ",
      name,
      cName,
      emailSetting,
      email,
      phone,
      inquiry
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contactTitle}>
          お問い合わせは
          <br />
          こちらのフォームより承っております。
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            お名前 <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={name}
            placeholder='しさく くらら'
            onChange={(e) => handleName(e)}
          />
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            会社名 <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={cName}
            placeholder='合同会社施策ぱっと'
            onChange={(e) => handleCName(e)}
          />
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            日中連絡が取れる電話番号 <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={phone}
            placeholder='0X0-1234-5678'
            onChange={(e) => handlePhone(e)}
          />
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            お名前 <span className={classes.symbol}>*</span>
          </div>
          <ActionSelect items={selectItems} select={(e) => handleSelect(e)} />
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            メールアドレス <span className={classes.symbol}>*</span>
          </div>
          <input
            className={classes.formInput}
            value={email}
            placeholder='example@shisaku-pad.co.jp'
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className={classes.contactForm}>
          <div className={classes.formTitle}>
            お問い合わせ内容 <span className={classes.symbol}>*</span>
          </div>
          <textarea
            className={classes.formTextarea}
            value={inquiry}
            placeholder='お問い合わせ内容'
            onChange={(e) => handleInquiry(e)}
          />
        </div>
        <div className={classes.policy}>
          <input type='checkbox' className={classes.checkbox} />
          プライバシーポリシーに同意して送信する
        </div>
        <ActionButton
          type='dark'
          content='この内容で送信する'
          className={classes.formBtn}
          action={handleSend}
        />
      </div>
    </div>
  );
};
