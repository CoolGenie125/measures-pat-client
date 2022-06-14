import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "pages/Landing/Landing";
import { Account } from "pages/Account/Account";
import { LayoutStyles } from "./LayoutStyle";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { Usage } from "pages/Usage/Usage";
import { Contact } from "pages/Contact/Contact";
import { useCallback, useEffect, useState } from "react";
import { AccountSetting } from "pages/Account/Setting/AccountSetting";
import { ThankYou } from "pages/ThankYou/ThankYou";
import { ErrorRoute } from "pages/ErrorRoute/ErrorRoute";
import { Healthy } from "pages/Heathly/Heathly";

export default function Layout() {
  const classes = LayoutStyles();
  const [status, setStatus] = useState(true);

  const onclick = () => {
    setStatus(true);
  };

  const onSidebarClose = () => {
    setStatus(false);
  };

  const handleWindowResize = useCallback((event: any) => {
    if (window.innerWidth > 839) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <Router>
      <Sidebar handleClose={onSidebarClose} mobileStatus={status} />
      <div className={classes.container}>
        <Header mobileAction={onclick} />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account/setting' element={<AccountSetting />} />
          <Route path='/account/setting/thankyou' element={<ThankYou />} />
          <Route path='/private/healthy' element={<Healthy />} />
          <Route path='/usage' element={<Usage />} />
          <Route path='/usage/contact' element={<Contact />} />
          <Route path='/404' element={<ErrorRoute />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
