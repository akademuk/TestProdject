import { createUseStyles } from 'react-jss';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  container: {
    maxWidth: '285px',
    margin: '0 auto',
  },
  title: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    color: theme.colors.black,
    fontSize: '16px',
    textAlign: 'center',
    marginTop: '36px',
    display: 'block',
  },
  seasonTicket: {
    padding: '7px 9px 6px 9px',
    fontFamily: theme.fonts.GraphikLCG.Regular,
    color: theme.colors.black,
    textAlign: 'center',
    background: theme.colors.white,
    boxShadow: '1px 1px 30px rgba(0, 0, 0, 0.15)',
    borderRadius: '15px',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '15px',
    '& div': {
      marginRight: '10px',
      marginTop: '9px',
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  box: {
    background: theme.colors.white,
    boxShadow: '1px 1px 30px rgba(0, 0, 0, 0.15)',
    borderRadius: '15px',
    margin: '50px auto 0',
    padding: '23px 15px 13px',
    maxWidth: '260px',
  },
  phoneTitle: {
    fontFamily: theme.fonts.GraphikLCG.Regular,
    fontSize: '14px',
    color: theme.colors.black,
    display: 'block',
    textAlign: 'center',
    lineHeight: '21px',
    maxWidth: '185px',
    margin: '0 auto',
  },
  phone: {
    color: theme.colors.blackOverlay,
    fontFamily: theme.fonts.GraphikLCG.Medium,
    fontSize: '14px',
    marginTop: '5px',
    '&:first-child': {
      marginTop: 0,
    },
  },
  phoneWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    marginTop: '10px',
  },
  price: {
    position: 'absolute',
    fontFamily: theme.fonts.GraphikLCG.Regular,
    left: 0,
    right: '4%',
    margin: '0 auto',
    bottom: '19%',
    textAlign: 'center',
    color: theme.colors.black,
    textDecorationLine: 'underline',
    fontSize: '14px',
    lineHeight: '14px',
    paddingBottom: '5px',
  },
}));
