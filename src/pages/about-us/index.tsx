import React, { Dispatch, SetStateAction } from 'react';
import Header from 'shared/components/header';

import Description from './components/description';
import Photos from './components/photos';
import Socials from './components/socials';
import Videos from './components/videos/videos';
import { useStyles } from './styles';

const AboutUs: React.FC<{
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}> = ({ setMobileMenu }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header setMobileMenu={setMobileMenu} isBlack />
      <Description />
      <Videos />
      <Photos />
      <Socials />
    </div>
  );
};

export default AboutUs;
