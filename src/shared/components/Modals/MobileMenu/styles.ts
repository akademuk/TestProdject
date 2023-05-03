import { createUseStyles } from 'react-jss';

import { IAppTheme } from '../../../styles/theme';

export const useStyles = createUseStyles<any, { isOpen: boolean }, IAppTheme>(
  (theme: IAppTheme) => ({
    container: {
      display: (isOpen) => (isOpen ? 'flex' : 'none'),
      zIndex: 10,
      minHeight: '100vh',
      minWidth: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: theme.colors.overlayColor,
      overflow: 'unset',
    },
    none: {
      display: 'none',
    },
    wrapper: {
      width: '100%',
      height: '100vh',
      position: 'relative',
      overflow: 'unset',
    },
    closeIcon: {
      position: 'absolute',
      top: '25px',
      right: '33px',
      cursor: 'pointer',
      zIndex: 11,
    },
  })
);
