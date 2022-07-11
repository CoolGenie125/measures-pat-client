import clsx from "clsx";
import { slideImg } from "config/Animations";
import Reveal from "react-awesome-reveal";
import { useNavigate, useParams } from "react-router-dom";
import backImg from "./../../assets/images/2.png";
import { ServiceCardStyles } from "./ServiceCardStyles";

interface ServiceCardProps {
  delay?: number;
  className?: any;
  cardId: string;
}

export default function ServiceCard({
  delay,
  className,
  cardId,
}: ServiceCardProps) {
  const classes = ServiceCardStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/category/${cardId}`);
  };

  return (
    <div className={clsx(classes.root, className)} onClick={handleClick}>
      <div className={classes.imgRoot}>
        <Reveal
          keyframes={slideImg}
          className={classes.slideRoot}
          triggerOnce
          delay={delay}>
          <div></div>
        </Reveal>
        <img src={backImg} className={classes.cardImg} />
      </div>
      <div className={classes.cardDes}>
        〜150,000円｜本格ホームページ・サービスページ制作
      </div>
      <div className={classes.cardFooter}>
        <i className='fas fa-pen-nib'></i>WEB制作
      </div>
    </div>
  );
}
