import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_1200, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1026px',
    margin: '120px auto 0',
    [MAX_WIDTH_1200]: {
      padding: '0 30px',
    },
    [MAX_WIDTH_1000]: {
      flexDirection: 'column',
      margin: '100px auto 0',
      padding: '0 40px',
    },
    [MAX_WIDTH_767]: {
      maxWidth: 'unset',
      margin: '50px auto 0',
    },
  },
  photo: {
    marginRight: '180px',
    width: '482px',
    [MAX_WIDTH_1000]: {
      width: '100%',
      margin: '35px auto 0',
    },
  },
  textSide: {
    [MAX_WIDTH_1000]: {
      order: '-1',
      padding: '0 40px',
    },
    [MAX_WIDTH_767]: {
      padding: '0px',
    },
  },
  title: {
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    color: theme.colors.black,
    fontSize: '48px',
    display: 'block',
    [MAX_WIDTH_1000]: {
      fontSize: '24px',
      textAlign: 'center',
    },
    [MAX_WIDTH_767]: {
      fontSize: '18px',
    },
  },
  description: {
    fontFamily: theme.fonts.GraphikLCG.Medium,
    color: theme.colors.black,
    marginTop: '67px',
    fontSize: '16px',
    lineHeight: '24px',
    [MAX_WIDTH_1000]: {
      textAlign: 'center',
    },
    [MAX_WIDTH_767]: {
      fontSize: '16px',
      marginTop: '18px',
    },
  },
  arrowBtn: {
    width: '67px',
    height: '67px',
    cursor: 'pointer',
    marginRight: '38px',
    [MAX_WIDTH_767]: {
      width: '25px',
      height: '25px',
      marginRight: '12px',
    },
  },
  desktopFranchise: {
    [MAX_WIDTH_1000]: {
      display: 'none',
    },
  },
  mobileFranchise: {
    display: 'none',
    [MAX_WIDTH_1000]: {
      display: 'block',
    },
  },
  franchise_info: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '43px',
    cursor: 'pointer',
    '& span': {
      fontFamily: theme.fonts.GraphikLCG.Semibold,
      color: theme.colors.black,
      fontSize: '14px',
      [MAX_WIDTH_767]: {
        fontSize: '12px',
        textTransform: 'uppercase',
      },
    },
  },
}));
