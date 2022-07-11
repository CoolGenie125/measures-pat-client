import { useNavigate } from "react-router-dom";
import { BreadcrumbsStyles } from "./BreadcrumbsStyles";

interface BreadcrumbsProps {
  content: string;
}
export default function Breadcrumbs({ content }: BreadcrumbsProps) {
  const classes = BreadcrumbsStyles();
  const navigate = useNavigate();
  const main = content.split("/");
  main.shift();

  const handleOrigin = () => {
    navigate("/");
  };

  const handlePartClick = (item: string) => {
    navigate(content.slice(0, content.indexOf(item)) + item);
  };

  return (
    <div className={classes.root}>
      <div className={classes.homeLink} onClick={handleOrigin}>
        HOME
      </div>
      {main?.map((item: any, key: any) => {
        return (
          <div
            className={classes.link}
            key={key}
            onClick={() => handlePartClick(item)}>
            <i className='far fa-angle-right'></i>
            {item}
          </div>
        );
      })}
    </div>
  );
}
