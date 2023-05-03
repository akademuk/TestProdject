import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  title: {
    color: theme.colors.titleBlack,
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    fontSize: '36px',
    textAlign: 'center',
    display: 'block',
    [MAX_WIDTH_1000]: {
      fontSize: '24px',
    },
    [MAX_WIDTH_767]: {
      fontSize: '18px',
      textTransform: 'uppercase',
    },
  },
  container: {
    background: theme.colors.grey,
    padding: '82px 0 145px',
    marginTop: '70px',
    [MAX_WIDTH_1000]: {
      padding: '82px 40px 145px',
    },
    [MAX_WIDTH_767]: {
      padding: '82px 40px 50px',
    },
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '64px',
    [MAX_WIDTH_1000]: {
      justifyContent: 'space-between',
    },
    [MAX_WIDTH_767]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  list: {
    marginRight: '163px',
    [MAX_WIDTH_1000]: {
      marginRight: '0',
    },
  },
  socialItem: {
    fontFamily: theme.fonts.GraphikLCG.Regular,
    fontSize: '18px',
    color: theme.colors.black,
    display: 'flex',
    alignItems: 'center',
    marginRight: '30px',
    textDecoration: 'none',
    marginTop: '28px',
    textTransform: 'uppercase',
    '&:first-child': {
      marginTop: 0,
    },
    '& span': {
      display: 'block',
    },
  },
  instIcon: {
    width: '24px',
    height: '24px',
    marginRight: '30px',
  },

  image: {
    [MAX_WIDTH_1000]: {
      width: '394px',
    },
    [MAX_WIDTH_767]: {
      marginTop: '10px',
      width: '295px',
    },
  },
}));
