import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_1200, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  page: {
    height: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  boxCenter: {
    border: ['1px', 'solid', theme.colors.white],
    borderRadius: '10px',
    width: '1070px',
    height: '75vh',
    position: 'relative',
    zIndex: 3,
    margin: '3% auto 0',
    display: 'flex',
    alignItems: 'center',
    [MAX_WIDTH_1200]: {
      width: '730px',
      height: '45vh',
    },
  },
  cornerFigure: {
    background: theme.colors.white,
    height: '20.3px',
    borderRadius: '10px 10px 0px 0px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  mobileTitleWrapper: {
    display: 'none',
    [MAX_WIDTH_767]: {
      display: 'block',
      textAlign: 'center',
      maxWidth: '400px',
      margin: '0 auto',
    },
  },
  headerScreen: {
    color: theme.colors.white,
    height: '100vh',
    [MAX_WIDTH_1000]: {
      height: '768px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    [MAX_WIDTH_767]: {
      display: 'none',
    },
  },
  titlesWrapper: {
    marginLeft: '120px',
  },
  firstTitle: {
    color: theme.colors.white,
    fontSize: '36px',
    fontFamily: theme.fonts.PlayfairDisplay.Regular,
    lineHeight: '52px',
    position: 'relative',
    zIndex: 5,
    '&::before': {
      display: 'block',
      content: 'close-quote',
      position: 'absolute',
      top: '60%',
      left: '-12%',
      width: '85px',
      height: '1px',
      transform: 'translate(0, -50%)',
      background: theme.colors.white,
      [MAX_WIDTH_1000]: {
        width: '30px',
        left: '-11%',
      },
      [MAX_WIDTH_767]: {
        background: theme.colors.black,
        left: '15%',
        width: '13px',
      },
    },
    [MAX_WIDTH_1000]: {
      fontSize: '20px',
      lineHeight: 'unset',
    },
    [MAX_WIDTH_767]: {
      fontSize: '16px',
      color: theme.colors.black,
    },
  },
  secondTitle: {
    color: theme.colors.white,
    fontSize: '96px',
    fontFamily: theme.fonts.PlayfairDisplay.Regular,
    marginLeft: '70px',
    lineHeight: '100px',
    [MAX_WIDTH_1000]: {
      fontSize: '48px',
      lineHeight: 'unset',
    },
    [MAX_WIDTH_767]: {
      fontSize: '30px',
      color: theme.colors.black,
    },
  },
  backgroundVideo: {
    height: '100vh',
    width: '100vw',
    objectFit: 'cover',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    [MAX_WIDTH_1000]: {
      height: '100%',
    },
  },
  homeScreenOverlay: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.colors.blackOverlay,
    zIndex: 2,
    [MAX_WIDTH_1000]: {
      height: '100%',
    },
  },
  mobileSalonPhoto: {
    display: 'none',
    [MAX_WIDTH_767]: {
      display: 'block',
      width: '100%',
      marginTop: '25px',
    },
  },
}));
