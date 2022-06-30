import clsx from "clsx";
import { ActionInputStyles } from "./ActionInputStyles";

interface ActionInputProps {
  className?: any;
  placeholder?: string;
  value: string;
  action: (e: any) => void;
  disable?: boolean;
  type?: string;
}

export default function ActionInput({
  className,
  placeholder,
  value,
  action,
  disable,
  type,
}: ActionInputProps) {
  const classes = ActionInputStyles();

  return (
    <input
      type={type}
      className={clsx(classes.root, className)}
      value={value}
      placeholder={placeholder}
      onChange={(e) => action(e.target.value)}
    />
  );
}
