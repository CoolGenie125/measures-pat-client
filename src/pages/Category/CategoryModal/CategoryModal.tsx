import { useStyles } from "./CategoryModalStyle";
import { useEffect, useRef } from "react";
import logo from "../../../assets/images/logo.webp";

interface CategoryModalProps {
  show: boolean;
  onClose: () => void;
  category: any;
}

export default function CategoryModal({
  show,
  onClose,
  category,
}: CategoryModalProps) {
  const classes = useStyles();

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root: any = rootRef.current;
        const content: any = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);

  return (
    <>
      <div
        className={show ? classes.loaderWrapper : classes.displayNone}
        ref={rootRef}>
        <div className={classes.modalRoot} ref={contentRef}>
          <div className={classes.header}>
            <img src={logo} className={classes.logoImg} alt='modalLogo' />
            <div className={classes.closeIcon} onClick={onClose}>
              <i className='fal fa-times'></i>
            </div>
          </div>
          <p className={classes.modalTitle}>食事 美容</p>

          {category?.map((item: any, key: any) => {
            return (
              <div className={classes.modalItem} key={key}>
                <div className={classes.itemTitle}>{item}</div>
                <div className={classes.itemIcon}>
                  <i className='fas fa-caret-right'></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
