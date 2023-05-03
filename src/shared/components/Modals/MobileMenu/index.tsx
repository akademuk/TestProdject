import CLOSE_ICON from 'assets/images/close-icon.svg';
import React, { Dispatch, SetStateAction } from 'react';

import Navigation from '../../navigation';
import { useStyles } from './styles';

const MobileMenu: React.FC<{
  isOpen: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setMobileMenu }) => {
  const classes = useStyles({ isOpen: isOpen });
  return (
    <div className={`${classes.container}`}>
      <div className={classes.wrapper}>
        <img
          src={CLOSE_ICON}
          className={classes.closeIcon}
          onClick={() => {
            setMobileMenu(false);
          }}
          alt="close icon"
        />
        <Navigation isBlack />
      </div>
    </div>
  );
};

export default MobileMenu;
