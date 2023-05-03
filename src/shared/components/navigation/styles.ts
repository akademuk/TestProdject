import { createUseStyles } from 'react-jss';
import { IAppTheme } from 'shared/styles/theme';

import { MAX_WIDTH_1000 } from '../../constans';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  navigation: {
    display: 'flex',
    color: theme.colors.white,
    fontFamily: theme.fonts.GraphikLCG.Regular,
    fontSize: '16px',
    padding: 0,
    [MAX_WIDTH_1000]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& a': {
      marginRight: '70px',
      cursor: 'pointer',
      display: 'block',
      textDecoration: 'none',
      transition: '0.5s border',
      [MAX_WIDTH_1000]: {
        display: 'block',
        marginRight: '0px',
        marginTop: '55px',
      },
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  black: {
    color: theme.colors.black,
  },
  white: {
    color: theme.colors.white,
  },
}));
