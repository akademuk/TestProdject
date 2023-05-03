import STARS_IMAGE from 'assets/images/stars.svg';
import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  title: {
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    color: theme.colors.black,
    fontSize: '36px',
    textAlign: 'center',
    marginTop: '97px',
    display: 'block',
    [MAX_WIDTH_1000]: {
      fontSize: '24px',
    },
    [MAX_WIDTH_767]: {
      fontSize: '18px',
      marginTop: '44px',
    },
  },
  button: {
    fontFamily: theme.fonts.GraphikLCG.Medium,
    fontSize: '14px',
    color: theme.colors.black,
    width: '150px',
    height: '41px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    margin: '40px auto 0',
    background: theme.colors.warnWhite,
    cursor: 'pointer',
  },
  servicesWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '97px',
    maxWidth: '1026px',
    margin: '0 auto',
    [MAX_WIDTH_1000]: {
      maxWidth: 'unset',
      padding: '0 50px',
      margin: '63px auto 0',
    },
    [MAX_WIDTH_767]: {
      margin: '50px auto 0',
      padding: '0 40px',
    },
  },
  serviceItem: {
    background: theme.colors.grey,
    width: '493px',
    height: '291px',
    '&:nth-of-type(n+3)': {
      marginTop: '20px',
    },
    '&:first-child': {
      [MAX_WIDTH_767]: {
        marginTop: '0px',
      },
    },
    [MAX_WIDTH_1000]: {
      width: '49%',
      height: 'auto',
    },
    [MAX_WIDTH_767]: {
      marginTop: '20px',
      width: '100%',
    },
  },
  serviceWrapper: {
    paddingLeft: '40px',
    [MAX_WIDTH_1000]: {
      padding: '0 26px',
      paddingBottom: '30px',
    },
  },
  serviceNumber: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    fontSize: '18px',
    color: theme.colors.black,
    paddingTop: '12px',
    display: 'block',
    [MAX_WIDTH_767]: {
      fontSize: '16px',
    },
  },
  serviceTitle: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    fontSize: '20px',
    color: theme.colors.black,
    paddingTop: '14px',
    display: 'block',
    [MAX_WIDTH_767]: {
      fontSize: '16px',
    },
  },
  serviceDescription: {
    paddingTop: '10px',
    fontFamily: theme.fonts.GraphikLCG.Light,
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.colors.black,
    maxWidth: '431px',
    [MAX_WIDTH_767]: {
      fontSize: '14px',
    },
  },
  quest_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '127px',
    [MAX_WIDTH_1000]: {
      flexDirection: 'column',
    },
    [MAX_WIDTH_767]: {
      marginTop: '50px',
    },
  },
  questTitle: {
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    color: theme.colors.black,
    fontSize: '32px',
    maxWidth: '493px',
    position: 'relative',
    marginRight: '110px',
    marginBottom: '35px',
    '&:after': {
      content: 'close-quote',
      position: 'absolute',
      bottom: '-70px',
      width: '117px',
      height: '93px',
      right: '15%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: `url(${STARS_IMAGE})`,
      textAlign: 'center',
      [MAX_WIDTH_1000]: {
        display: 'none',
      },
    },
    [MAX_WIDTH_1000]: {
      margin: '0 auto',
      textAlign: 'center',
    },
    [MAX_WIDTH_767]: {
      fontSize: '18px',
      padding: '0 40px',
    },
  },
}));
