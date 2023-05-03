import STARS_IMAGE from 'assets/images/star_2.png';
import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '68px',
    [MAX_WIDTH_1000]: {
      padding: '0 50px',
      marginTop: '47px',
    },
    [MAX_WIDTH_767]: {
      flexDirection: 'column',
      padding: '0 40px',
    },
  },
  title: {
    marginTop: '100px',
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    fontSize: '36px',
    color: theme.colors.black,
    textTransform: 'uppercase',
    textAlign: 'center',
    display: 'block',
    [MAX_WIDTH_1000]: {
      marginTop: '0',
      fontSize: '24px',
    },
  },
  photoWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '100px',
    [MAX_WIDTH_1000]: {
      flexDirection: 'column',
      marginRight: '20px',
      width: '315px',
    },
    [MAX_WIDTH_767]: {
      marginRight: '0px',
      width: '100%',
    },
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
  },
  bigImage: {
    width: '294px',
    height: '460px',
    marginRight: '22px',
    [MAX_WIDTH_1000]: {
      width: '100%',
      height: 'auto',
      marginRight: '0',
    },
    [MAX_WIDTH_767]: {
      width: '100%',
    },
  },
  smallOne: {
    width: '314px',
    height: '195px',
    [MAX_WIDTH_1000]: {
      display: 'none',
    },
  },
  smallTwo: {
    width: '315px',
    height: '217px',
    marginTop: '20px',
    [MAX_WIDTH_1000]: {
      width: '100%',
      height: 'auto',
    },
    [MAX_WIDTH_767]: {
      display: 'none',
    },
  },
  description: {
    maxWidth: '500px',
    [MAX_WIDTH_1000]: {
      maxWidth: '420px',
    },
    [MAX_WIDTH_767]: {
      marginTop: '30px',
      maxWidth: 'unset',
    },
    '& p': {
      fontFamily: theme.fonts.GraphikLCG.Regular,
      color: theme.colors.black,
      fontSize: '16px',
      marginTop: '16px',
      lineHeight: '24px',
      '&:first-child': {
        marginTop: 0,
      },
      '& span': {
        fontFamily: theme.fonts.GraphikLCG.Medium,
        color: theme.colors.black,
        fontSize: '20px',
        textTransform: 'uppercase',
      },
    },
  },
  guarantees: {
    maxWidth: '850px',
    margin: '115px auto 0',
    [MAX_WIDTH_1000]: {
      margin: '80px auto 0',
      padding: '0 50px',
    },
    [MAX_WIDTH_767]: {
      margin: '80px auto 0',
      padding: '0 40px',
    },
  },
  guaranteesTitle: {
    fontFamily: theme.fonts.PlayfairDisplay.Regular,
    textTransform: 'uppercase',
    fontSize: '24px',
    textAlign: 'center',
    display: 'block',
    color: theme.colors.black,
  },

  guaranteesWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '68px',
    [MAX_WIDTH_767]: {
      justifyContent: 'center',
      marginTop: '60px',
    },
  },

  guaranteesItem: {
    display: 'flex',
    alignItems: 'center',
    '&:nth-of-type(1)': {
      [MAX_WIDTH_767]: {
        marginTop: '38px',
      },
    },
    '&:nth-of-type(2)': {
      [MAX_WIDTH_767]: {
        marginTop: '38px',
      },
    },
    '&:nth-of-type(3)': {
      marginTop: '47px',
      [MAX_WIDTH_767]: {
        marginTop: '38px',
      },
    },
    '&:nth-of-type(4)': {
      marginTop: '47px',
      [MAX_WIDTH_767]: {
        marginTop: '38px',
      },
    },
  },

  guaranteesImg: {
    width: '100px',
    marginRight: '25px',
    [MAX_WIDTH_1000]: {
      width: '80px',
    },
  },

  guaranteesText: {
    color: theme.colors.btnBlack,
    fontFamily: theme.fonts.GraphikLCG.Regular,
    maxWidth: '205px',
    lineHeight: '27px',
  },
  generalText: {
    fontFamily: theme.fonts.GraphikLCG.Light,
    fontSize: '24px',
    color: theme.colors.black,
    textAlign: 'center',
    display: 'block',
    lineHeight: '36px',
    position: 'relative',
    marginTop: '205px',
    [MAX_WIDTH_1000]: {
      fontSize: '20px',
      marginTop: '105px',
    },
    [MAX_WIDTH_767]: {
      fontSize: '16px',
    },
    '&:before': {
      width: '78px',
      height: '137px',
      content: 'close-quote',
      position: 'absolute',
      left: '-10%',
      bottom: '45%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: `url(${STARS_IMAGE})`,
      [MAX_WIDTH_1000]: {
        width: '60px',
        height: '120px',
        left: '-5%',
      },
      [MAX_WIDTH_767]: {
        display: 'none',
      },
    },
  },
}));
