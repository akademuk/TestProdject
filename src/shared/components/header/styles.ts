import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '45px 100px 0',
    position: 'relative',
    width: '100%',
    zIndex: 3,
    [MAX_WIDTH_1000]: {
      padding: '45px 50px 100px',
      alignItems: 'start',
    },
    [MAX_WIDTH_767]: {
      padding: '30px 40px 60px',
    },
  },
  logo: {
    width: '104px',
    height: '39px',
    '& img': {
      width: '100%',
      height: '100%',
    },
    [MAX_WIDTH_767]: {
      width: '66px',
      height: '25px',
    },
  },
  navigation: {
    display: 'flex',
    color: theme.colors.white,
    fontFamily: theme.fonts.GraphikLCG.Regular,
    fontSize: '16px',
    '& li': {
      marginRight: '70px',
      listStyleType: 'none',
      cursor: 'pointer',
      '&:last-child': {
        marginRight: 0,
      },
    },
    [MAX_WIDTH_1000]: {
      display: 'none',
    },
  },
  mobileLogo: {
    display: 'block',
    width: '88px',
    height: '33px',
    [MAX_WIDTH_767]: {
      width: '66px',
      height: '25px',
    },
  },
  menuIcon: {
    width: '44px',
    height: '24px',
    display: 'none',
    [MAX_WIDTH_1000]: {
      display: 'block',
      cursor: 'pointer',
    },
    [MAX_WIDTH_767]: {
      width: '35px',
      height: '19px',
    },
  },
}));
