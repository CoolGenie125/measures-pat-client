import clsx from "clsx";
import { useStyles } from "./ActionSelectStyles";

interface ActionSelectProps {
  className?: any;
  items: any;
  select: (e: string) => void;
}

export default function ActionSelect({
  className,
  items,
  select,
}: ActionSelectProps) {
  const classes = useStyles();
  const handleSelect = (e: any) => {
    select(e.target.value);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <select className={classes.container} onClick={(e) => handleSelect(e)}>
        {items?.map((item: any, key: any) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <i className='fal fa-angle-down'></i>
    </div>
  );
}
