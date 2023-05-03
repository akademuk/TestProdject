import ArrowLeft from 'assets/images/arrow-left.svg';
import ArrowRight from 'assets/images/arrow-right.svg';
import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  title: {
    color: theme.colors.black,
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    fontSize: '48px',
    display: 'block',
    textAlign: 'center',
    [MAX_WIDTH_1000]: {
      fontSize: '24px',
    },
    [MAX_WIDTH_767]: {
      fontSize: '18px',
      marginTop: '50px',
    },
  },
  wrapper: {
    margin: '70px auto 0',
    maxWidth: '813px',
    [MAX_WIDTH_1000]: {
      maxWidth: 'unset',
      padding: '0 40px',
      margin: '44px auto 0',
    },
    [MAX_WIDTH_767]: {
      maxWidth: 'unset',
      padding: '0 32px',
      margin: '90px auto 0',
    },
  },
  wrapperItem: {
    display: 'flex',
    padding: '30px 30px',
    alignItems: 'center',
    justifyContent: 'space-between',
    [MAX_WIDTH_767]: {
      minHeight: '457px',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'unset',
      padding: '20px 18px',
    },
  },
  authorBlock: {
    background: theme.colors.warnWhite,
    height: '193px',
    marginTop: '40px',
    display: 'flex',
    '&:first-child': {
      marginTop: 0,
    },
    [MAX_WIDTH_1000]: {
      height: 'auto',
    },
  },
  name: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    fontSize: '16px',
    color: theme.colors.black,
    marginTop: '20px',
    display: 'block',
    [MAX_WIDTH_767]: {
      display: 'none',
    },
  },
  mobName: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    fontSize: '16px',
    color: theme.colors.black,
    display: 'none',
    [MAX_WIDTH_767]: {
      display: 'block',
    },
  },
  testimonial: {
    fontFamily: theme.fonts.GraphikLCG.Regular,
    fontSize: '14px',
    color: theme.colors.black,
    marginTop: '10px',
    lineHeight: '21px',
    maxWidth: '532px',
    [MAX_WIDTH_1000]: {
      paddingRight: '40px',
      maxWidth: 'unset',
    },
    [MAX_WIDTH_767]: {
      paddingRight: '0px',
      marginTop: '17px',
    },
  },
  nickName: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    fontSize: '14px',
    color: theme.colors.black,
    marginTop: '10px',
    [MAX_WIDTH_767]: {
      marginTop: '20px',
    },
  },
  arrowWrapper: {
    margin: '16px auto 0',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    '& div': {
      width: '15px',
      height: '15px',
      cursor: 'pointer',
      '&:first-child': {
        backgroundImage: `url(${ArrowLeft})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginRight: '80px',
      },
      '&:last-child': {
        backgroundImage: `url(${ArrowRight})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      },
    },
  },
  logo: {
    width: '114px',
    height: '114px',
    marginLeft: '52px',
    marginTop: '40px',
    marginRight: '40px',
    [MAX_WIDTH_1000]: {
      marginLeft: 0,
    },
    [MAX_WIDTH_767]: {
      marginTop: '23px',
      marginRight: 0,
    },
  },
}));
