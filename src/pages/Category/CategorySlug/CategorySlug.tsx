import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useStyles } from "./CategorySlugStyle";
import logo from "assets/images/logo.webp";
import postImg from "assets/images/2.png";
import clsx from "clsx";
import ActionButton from "components/ActionButton/ActionButton";

export const CategorySlug = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();

  const handleEntry = () => {
    navigate(`/category/${slug}/entry`);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.headerRoot}>
            <img src={logo} className={classes.logoImg} alt='categoryLogo' />
            <span className={classes.title}>架空WEB制作サービス</span>
          </div>
          <img src={postImg} className={classes.serviceImg} alt='serviceImg' />
          <div className={classes.descriptionRoot}>
            <div className={classes.descriptionTitle}>
              架空WEB制作サービス とは
            </div>
            <div
              className={clsx(classes.descriptionTopic, classes.widthLittle)}>
              できること
            </div>
            <div className={classes.description}>
              <div className={classes.leftPart}>
                <div className={classes.smallTopicItem}>
                  <i className='fas fa-thumbtack'></i>
                  ホームページ制作
                </div>
                <div className={classes.smallTopicItem}>
                  <i className='fas fa-thumbtack'></i>
                  ランディングページ制作
                </div>
              </div>
              <div className={classes.rightPart}>
                <img
                  src={postImg}
                  className={classes.rightPartImg}
                  alt='serviceImg'
                />
              </div>
            </div>
            <div className={classes.descriptionTitle}>
              What is a fictitious WEB production service?
            </div>
            <div className={classes.descriptionTopic}>できること</div>
            <div className={classes.detail}>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
          </div>
          <ActionButton
            type='dark'
            content='アプライ'
            className={classes.formBtn}
            action={handleEntry}
          />
        </div>
      </div>
      <Breadcrumbs content={location.pathname}/>
    </>
  );
};
