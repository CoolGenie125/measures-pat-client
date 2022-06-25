import { SidebarStyles } from "./SidebarStyles";
import LogoImg from "../../assets/images/logo.webp";
import avatar from "../../assets/images/avatar.png";
import banner from "../../assets/images/banner.png";
import { SidbarData } from "config/constant";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

interface SidebarProps {
  className?: any;
  mobileStatus: boolean;
  handleClose: () => void;
}

export default function Sidebar({
  className,
  handleClose,
  mobileStatus,
}: SidebarProps) {
  const classes = SidebarStyles();
  const navigate = useNavigate();
  const [rightPanel, setRightPanel] = useState(false);
  const [rightRouters, setRightRouters] = useState<any>();
  const [showStaus, setShowStatus] = useState<boolean>(mobileStatus);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setShowStatus(mobileStatus);
  }, [mobileStatus]);

  const handleLogo = () => {
    navigate("/");
  };

  const handleAccount = () => {
    navigate("/account");
  };

  const handleRightClose = () => {
    setRightPanel(false);
    isHidden && setShowStatus(false);
  };

  const handleWindowResize = useCallback((event: any) => {
    if (window.innerWidth > 839) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const handleRighPanel = (e: any) => {
    if (!e.show) {
      setRightPanel(false);
      navigate(e.link);
    } else {
      setRightPanel(true);
      setRightRouters(e.routers);
    }
  };

  const handleLink = (e: any) => {
    setRightPanel(false);
    isHidden && setShowStatus(false);
    setRightPanel(false);
    navigate(e);
  };

  const handleStudyLink = () => {
    window.open(
      "https://studio.design/?utm_source=demo-shisaku-pad.studio.site%2F&utm_medium=STUDIO%20Banner&utm_campaign=STUDIO%20Banner",
      "_blank"
    );
  };

  return (
    <>
      <div
        className={clsx(
          classes.root,
          className,
          !showStaus ? classes.displayNone : classes.displayShow
        )}>
        <img
          src={LogoImg}
          className={classes.logoImg}
          alt='logo'
          onClick={() => handleLogo()}
        />
        <div className={classes.avatarRoot} onClick={() => handleAccount()}>
          <img src={avatar} className={classes.avatarImg} />
          <div className={classes.avatarName}>しさく くらら</div>
          <div className={classes.avatarJob}>合同会社施策ぱっと</div>
        </div>
        <div className={classes.sidebarContent}>
          {SidbarData.map((item: any, key: any) => {
            return (
              <div
                className={classes.sidebarItem}
                key={key}
                onClick={() => handleRighPanel(item.router)}>
                <img
                  src={item.img}
                  className={classes.itemImg}
                  alt='sidebar-icon'
                />
                <div className={classes.itemContent}>{item.content}</div>
                <div className={classes.itemBtn}>
                  <i className='fas fa-caret-right'></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={showStaus ? classes.closePart : classes.displayNone}
        onClick={handleClose}>
        <div className={classes.closeRootIcon}>
          <i className='fal fa-times'></i>
        </div>
      </div>
      <div className={classes.studyLink} onClick={handleStudyLink}>
        <img src={banner} className={classes.banner}></img>
      </div>
      {rightPanel ? (
        <>
          <div className={classes.sidebarRight}>
            <div className={classes.rightHeader}>
              <div
                className={classes.closeIcon}
                onClick={() => setRightPanel(false)}>
                <i className='fal fa-times'></i>
              </div>
            </div>
            <div className={classes.rightContont}>
              {rightRouters?.map((item: any, key: any) => {
                return (
                  <div
                    className={classes.rightItem}
                    key={key}
                    onClick={() => handleLink(item?.link)}>
                    <div className={classes.rightArrow}>
                      <i className='far fa-arrow-right'></i>
                    </div>
                    <div className={classes.rightItemContent}>{item?.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.closeRightPart} onClick={handleRightClose}>
            <div className={classes.closeRightRootIcon}>
              <i className='fal fa-times'></i>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
