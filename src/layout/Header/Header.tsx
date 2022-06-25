import { HeaderStyles } from "./HeaderStyles";
import LogoImg from "../../assets/images/logo.webp";
import { useNavigate } from "react-router-dom";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { useState } from "react";

interface HeaderProps {
  mobileAction: () => void;
}

export default function Header({ mobileAction }: HeaderProps) {
  const classes = HeaderStyles();
  const navigate = useNavigate();
  const [searchPanel, setSearchPanel] = useState(false);

  const handleToLanding = () => {
    navigate("/");
  };

  const handleSearchPanel = () => {
    setSearchPanel(true);
  };

  const searchPanelClose = () => {
    setSearchPanel(false);
  };

  const searchAction = (e: any) => {
    console.log("inout value", e);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.menu}>
          <i className='fas fa-bars' onClick={mobileAction}></i>
          <img
            src={LogoImg}
            className={classes.logoImg}
            alt='logo'
            onClick={handleToLanding}
          />
        </div>
        <div className={classes.searchRoot} onClick={handleSearchPanel}>
          <div className={classes.searchIcon}>
            <i className='far fa-search'></i>
          </div>
          <div className={classes.searchInput}>キーワードから探す</div>
        </div>
      </div>
      <SearchPanel
        show={searchPanel}
        close={searchPanelClose}
        input={searchAction}
      />
    </>
  );
}
