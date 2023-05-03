import SALON_PHOTO from 'assets/images/home-photo.png';
import POSTER from 'assets/images/poster.png';
import Video from 'assets/images/video.mp4';
import React, { Dispatch, SetStateAction } from 'react';
import { useWindowDimensions } from 'services/hooks/useDimensions/useWindowDimension';
import Header from 'shared/components/header';
import { EDimensions } from 'shared/constans';

import Franchise from './components/franchise';
import Services from './components/services';
import Testimonials from './components/testimonials';
import { useStyles } from './styles';

export const HomePage: React.FC<{
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
  isTestModalOpen: boolean;
  setTestModalOpen: Dispatch<SetStateAction<boolean>>;
  setWorkModal: Dispatch<SetStateAction<boolean>>;
}> = ({ isTestModalOpen, setTestModalOpen, setMobileMenu, setWorkModal }) => {
  const classes = useStyles();
  const dimensions = useWindowDimensions();

  return (
    <div className={classes.container}>
      <div className={classes.page}>
        {dimensions !== EDimensions.DESKTOP && (
          <Header setMobileMenu={setMobileMenu} isTop={false} />
        )}
        <div className={classes.mobileTitleWrapper}>
          <div className={classes.firstTitle}>центр ручної корекції фігури</div>
          <div className={classes.secondTitle}>BODY CONTROL</div>
        </div>
        <img
          src={SALON_PHOTO}
          className={classes.mobileSalonPhoto}
          alt="photo"
        />
        <div className={classes.headerScreen}>
          {dimensions === EDimensions.DESKTOP && (
            <Header setMobileMenu={setMobileMenu} />
          )}
          <div className={classes.boxCenter}>
            <div className={classes.cornerFigure} />
            <div className={classes.titlesWrapper}>
              <div className={classes.firstTitle}>
                центр ручної корекції фігури
              </div>
              <div className={classes.secondTitle}>BODY CONTROL</div>
            </div>
          </div>
          <video
            className={classes.backgroundVideo}
            autoPlay
            loop
            muted
            poster={POSTER}
          >
            <source src={Video} type="video/mp4" />
          </video>
          <div className={classes.homeScreenOverlay} />
        </div>
        <Services
          isTestModalOpen={isTestModalOpen}
          setTestModalOpen={setTestModalOpen}
        />
        <Testimonials />
        <Franchise setWorkModal={setWorkModal} />
      </div>
    </div>
  );
};
