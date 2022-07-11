import { Grid } from "@material-ui/core";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import ServiceCard from "components/ServiceCard/ServiceCard";
import { appear, letterDownUp } from "config/Animations";
import { useState } from "react";
import Reveal from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryModal from "./CategoryModal/CategoryModal";
import { useStyles } from "./CategoryStyle";

export const Category = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleCreateClose = () => {
    setShowCategoryModal(false);
  };

  const categoryData = [
    "すべて",
    "食事配達",
    "歯の矯正",
    "ホワイトニング",
    "脱毛",
    "育児支援",
    "ジム",
  ];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Reveal keyframes={letterDownUp} triggerOnce>
            <div className={classes.headerTitle}>食事・美容</div>
          </Reveal>
          <div
            className={classes.menu}
            onClick={() => setShowCategoryModal(true)}>
            <i className='fas fa-bars'></i>
          </div>
          <Reveal
            keyframes={letterDownUp}
            triggerOnce
            className={classes.smallTitle}>
            <p className={classes.smallTitltFont}>すべて</p>
          </Reveal>
          <Reveal
            keyframes={appear}
            triggerOnce
            delay={1000}
            className={classes.categoryHeaderRoot}>
            <div className={classes.categoryHeaderContainer}>
              <div className={classes.categoryTitle}>WEB制作</div>
              <div className={classes.categoryTitle}>印刷物制作</div>
              <div className={classes.categoryTitle}>動画制作</div>
              <div className={classes.categoryTitle}>写真撮影・編集</div>
              <div className={classes.categoryTitle}>資料制作・デザイン</div>
            </div>
          </Reveal>
        </div>
        <Reveal keyframes={appear} triggerOnce delay={2000}>
          <Grid container>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <ServiceCard cardId="test" delay={2500}/>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <ServiceCard cardId="test" delay={2500} />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <ServiceCard cardId="test" delay={2500} />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <ServiceCard cardId="test" delay={2500} />
            </Grid>
          </Grid>
        </Reveal>
      </div>
      <Breadcrumbs content={location.pathname}/>
      <CategoryModal
        show={showCategoryModal}
        onClose={handleCreateClose}
        category={categoryData}
      />
    </>
  );
};
