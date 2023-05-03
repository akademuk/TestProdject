import IMAGE from 'assets/images/about-social.png';
import INST from 'assets/images/inst.svg';
import TIK_TOK from 'assets/images/tikTok.png';
import React from 'react';

import { useStyles } from './styles';

const Socials: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.title}>Ми в соцмережах</span>
      <div className={classes.wrapper}>
        <div className={classes.list}>
          <a
            href="https://www.instagram.com/body_control_odessa/?hl=ru"
            target="_blank"
            className={classes.socialItem}
          >
            <img src={INST} className={classes.instIcon} alt="logo" />
            <span>body_control_odessa</span>
          </a>
          <a
            href="https://www.instagram.com/body_control_kh/?hl=ru"
            target="_blank"
            className={classes.socialItem}
          >
            <img src={INST} className={classes.instIcon} alt="logo" />
            <span>body_control_kh</span>
          </a>
          <a
            href="https://www.instagram.com/body_control_poznyaki/?hl=ru"
            target="_blank"
            className={classes.socialItem}
          >
            <img src={INST} className={classes.instIcon} alt="logo" />
            <span>body_control_poznyaki</span>
          </a>
          <a
            href="https://www.instagram.com/body_control_kyiv/?hl=ru"
            target="_blank"
            className={classes.socialItem}
          >
            <img src={INST} className={classes.instIcon} alt="logo" />
            <span>body_control_kyiv</span>
          </a>
          <a
            href="https://instagram.com/body_control_pechersk"
            target="_blank"
            className={classes.socialItem}
          >
            <img src={INST} className={classes.instIcon} alt="logo" />
            <span>body_control_pechersk</span>
          </a>
          <a
            href="https://www.tiktok.com/@body.control"
            target="_blank"
            className={classes.socialItem}
          >
            <img src={TIK_TOK} className={classes.instIcon} alt="logo" />
            <span>body.control</span>
          </a>
        </div>
        <img className={classes.image} src={IMAGE} alt="photo" />
      </div>
    </div>
  );
};

export default Socials;
