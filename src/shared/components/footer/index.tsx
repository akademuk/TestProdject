import LOGO from 'assets/images/logo.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <img
        src={LOGO}
        className={classes.logo}
        alt="logo"
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
      />
      <div className={classes.navigation}>
        <div className={classes.column}>
          <div className={classes.name}>Головна</div>
          <div className={classes.subType}>Види послуг</div>
          <div className={classes.subType}>Відгуки</div>
          <div className={classes.subType}>Франшиза</div>
        </div>
        <div className={classes.column}>
          <div className={classes.name}>Про нас</div>
          <div className={classes.subType}>Хто ми?</div>
          <div className={classes.subType}>Рекомендації</div>
          <div className={classes.subType}>Наші центри</div>
          <div className={classes.subType}>Ми в соцмережах</div>
        </div>
        <div className={classes.column}>
          <div className={classes.name}>Абонементи</div>
          <div className={classes.subType}>Абонементи</div>
        </div>
        <div className={classes.column}>
          <div className={classes.name}>Результати</div>
          <div className={classes.subType}>Результати</div>
        </div>
        <div className={classes.column}>
          <div className={classes.name}>Телефон</div>
          <div className={classes.subType}>+380983131300</div>
          <div className={classes.subType}>+380509500100</div>
          <div className={classes.subType}>+380977011770</div>
          <div className={classes.subType}>+380977490707</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
