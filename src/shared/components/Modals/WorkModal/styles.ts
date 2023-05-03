import MOB_WORK from 'assets/images/work-mob.png';
import WORK from 'assets/images/work.png';
import { createUseStyles } from 'react-jss';

import { MAX_WIDTH_767 } from '../../../constans';
import { IAppTheme } from '../../../styles/theme';

export const useStyles = createUseStyles<any, { isOpen: boolean }, IAppTheme>(
  (theme: IAppTheme) => ({
    container: {
      zIndex: 10,
      minHeight: '100vh',
      minWidth: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    none: {
      display: 'none',
    },
    wrapper: {
      width: '532px',
      height: '469px',
      position: 'relative',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${WORK})`,
      zIndex: 11,
      [MAX_WIDTH_767]: {
        width: '360px',
        backgroundImage: `url(${MOB_WORK})`,
      },
    },
    closeIcon: {
      position: 'absolute',
      top: '10px',
      right: '14px',
      cursor: 'pointer',
      zIndex: 13,
    },
  })
);
