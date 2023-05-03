import Logo from 'assets/images/logo.svg';
import MENU_ICON from 'assets/images/menu-icon.svg';
import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindowDimensions } from 'services/hooks/useDimensions/useWindowDimension';

import { EDimensions } from '../../constans';
import Navigation from '../navigation';
import { useStyles } from './styles';

const Header: React.FC<{
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
  isBlack?: boolean;
  isTop?: boolean;
}> = ({ setMobileMenu, isBlack }) => {
  const classes = useStyles();
  const dimensions = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <div className={classes.header}>
      <a
        href="#"
        className={classes.logo}
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
      >
        <img src={Logo} alt="logo" />
      </a>
      {dimensions === EDimensions.DESKTOP && (
        <Navigation isBlack={Boolean(isBlack)} />
      )}
      <img
        src={MENU_ICON}
        className={classes.menuIcon}
        onClick={() => setMobileMenu(true)}
        alt="logo"
      />
    </div>
  );
};

export default Header;
