import clsx from "clsx";
import { ActionButtonStyles } from "./ActionButtonStyles";

interface ActionButtonProps {
  className?: any;
  type?: string;
  content: string;
  action?: () => void;
  disable?: boolean;
}

export default function ActionButton({
  className,
  type,
  content,
  action,
  disable,
}: ActionButtonProps) {
  const classes = ActionButtonStyles();

  return (
    <div
      className={clsx(
        className,
        type === "dark" ? classes.darkRoot : classes.lightRoot,
        disable ? classes.disable : classes.noDisable
      )}
      onClick={disable ? () => {} : action}>
      <p className={type === "dark" ? classes.lightDes : classes.darkDes}>
        {content}
      </p>
      <i className='fas fa-chevron-right'></i>
    </div>
  );
}
