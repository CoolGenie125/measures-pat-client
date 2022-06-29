import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";
import { useStyles } from "./CategorySlugStyle";
import logo from "assets/images/logo.webp";
import postImg from "assets/images/2.png";
import clsx from "clsx";
import ActionButton from "components/ActionButton/ActionButton";

export const CategorySlug = () => {
  const classes = useStyles();
  const { slug } = useParams();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.headerRoot}>
            <img src={logo} className={classes.logoImg} alt='categoryLogo' />
            <span className={classes.title}>
              Fictitious WEB production service
            </span>
          </div>
          <img src={postImg} className={classes.serviceImg} alt='serviceImg' />
          <div className={classes.descriptionRoot}>
            <div className={classes.descriptionTitle}>
              What is a fictitious WEB production service?
            </div>
            <div
              className={clsx(classes.descriptionTopic, classes.widthLittle)}>
              What you can do
            </div>
            <div className={classes.description}>
              <div className={classes.leftPart}>
                <div className={classes.smallTopicItem}>
                  <i className='fas fa-thumbtack'></i>
                  Web Design
                </div>
                <div className={classes.smallTopicItem}>
                  <i className='fas fa-thumbtack'></i>
                  Web Design
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
            <div className={classes.descriptionTopic}>What you can do</div>
            <div className={classes.detail}>
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text Text Text Text Text Text Text Text Text Text
              Text Text Text Text
            </div>
          </div>
          <ActionButton
            type='dark'
            content='この内容で送信する'
            className={classes.formBtn}
          />
        </div>
      </div>
      <Breadcrumbs />
    </>
  );
};
