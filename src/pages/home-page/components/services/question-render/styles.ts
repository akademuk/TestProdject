import IPHONE_IMAGE from 'assets/images/iphone.png';
import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  container: {
    padding: '65px 0 40px',
    marginRight: '6%',
    [MAX_WIDTH_767]: {
      marginRight: 0,
    },
  },
  logo: {
    margin: '0 auto',
    display: 'block',
  },
  title: {
    fontFamily: theme.fonts.GraphikLCG.Medium,
    fontSize: '10px',
    color: theme.colors.fontsBlack,
    textAlign: 'center',
    display: 'block',
    textTransform: 'uppercase',
    marginTop: '22px',
  },
  question: {
    marginTop: '7px',
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    fontSize: '16px',
    color: theme.colors.black,
    textAlign: 'center',
    display: 'block',
    maxWidth: '257px',
    margin: '0 auto',
  },
  answerWrapper: {
    maxWidth: '270px',
    margin: '22px auto 0',
    [MAX_WIDTH_767]: {
      maxWidth: 'unset',
      padding: '0 14px',
    },
  },
  answer: {
    background: theme.colors.white,
    boxShadow: '1px 1px 30px rgba(0, 0, 0, 0.15)',
    borderRadius: '15px',
    marginTop: '13px',
    '&:first-child': {
      marginTop: '0',
    },
  },
  answerOneRow: {
    padding: '17px 30px 17px 32px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  answerTwoRow: {
    padding: '7px 30px 7px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: theme.fonts.GraphikLCG.Medium,
    fontSize: '14px',
    color: theme.colors.black,
    maxWidth: '171px',
  },
  threeRow: {
    fontFamily: theme.fonts.GraphikLCG.Medium,
    fontSize: '14px',
    color: theme.colors.black,
    maxWidth: '190px',
  },
  iphoneOverlay: {
    minHeight: '803px',
    width: '367px',
    backgroundImage: `url(${IPHONE_IMAGE})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    [MAX_WIDTH_1000]: {
      marginTop: '100px',
    },
    [MAX_WIDTH_767]: {
      background: 'unset',
      width: 'auto',
      minHeight: 'auto',
      marginTop: '0',
    },
  },
  submitButton: {
    width: '128px',
    height: '54px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.colors.btnBlack,
    boxShadow: '1px 1px 30px rgba(0, 0, 0, 0.15)',
    borderRadius: '15px',
    margin: '47px auto 0',
    outline: 'none',
    border: 'none',
    fontFamily: theme.fonts.GraphikLCG.Medium,
    color: theme.colors.white,
    cursor: 'pointer',
  },
}));
