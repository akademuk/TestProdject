import { createUseStyles } from 'react-jss';
import { IAppTheme } from 'shared/styles/theme';

import {
  MAX_WIDTH_1000,
  MAX_WIDTH_1200,
  MAX_WIDTH_767,
} from '../../shared/constans';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  page: {
    flex: 1,
    width: '100%',
  },
  container: {
    [MAX_WIDTH_767]: {
      padding: '0 40px',
    },
  },
  title: {
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    fontSize: '36px',
    color: theme.colors.titleBlack,
    display: 'block',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: '140px',
    [MAX_WIDTH_1000]: {
      marginTop: '100px',
      fontSize: '20px',
    },
  },
  subtitle: {
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    fontSize: '36px',
    color: theme.colors.titleBlack,
    display: 'block',
    textAlign: 'center',
    marginBottom: '27px',
    [MAX_WIDTH_1000]: {
      fontSize: '20px',
    },
  },
  list: {
    marginTop: '27px',
    width: '600px',
    [MAX_WIDTH_767]: {
      width: '100%',
    },
  },
  item: {
    marginTop: '15px',
    '&:first-child': {
      marginTop: 0,
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
    lineHeight: '24px',
    [MAX_WIDTH_767]: {
      flexDirection: 'column',
      alignItems: 'start',
    },
  },
  name: {
    fontFamily: theme.fonts.GraphikLCG.Regular,
    color: theme.colors.black,
    textTransform: 'uppercase',
    fontSize: '16px',
    [MAX_WIDTH_767]: {
      fontSize: '14px',
    },
  },
  price: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    color: theme.colors.black,
    textTransform: 'uppercase',
    fontSize: '16px',
    [MAX_WIDTH_767]: {
      fontSize: '14px',
    },
  },
  paragraph: {
    fontFamily: theme.fonts.GraphikLCG.Regular,
    fontSize: '16px',
    color: theme.colors.fontsBlack,
    lineHeight: '24px',
    [MAX_WIDTH_767]: {
      fontSize: '14px',
    },
  },
  timeline: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    color: theme.colors.black,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '10px',
  },
  flex: {
    marginTop: '58px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [MAX_WIDTH_1200]: {
      flexDirection: 'column',
      marginTop: '8px',
    },
  },
  photo_one: {
    marginRight: '160px',
    width: '480px',
    [MAX_WIDTH_1200]: {
      marginRight: '0',
      marginTop: '60px',
      order: '1',
    },
    [MAX_WIDTH_767]: {
      width: '100%',
    },
  },
  photo_two: {
    marginLeft: '197px',
    width: '442px',
    [MAX_WIDTH_1200]: {
      marginLeft: '0',
      marginTop: '60px',
    },
    [MAX_WIDTH_767]: {
      width: '100%',
    },
  },
  photo_three: {
    marginRight: '176px',
    width: '463px',
    [MAX_WIDTH_1200]: {
      marginRight: '0',
      marginTop: '60px',
    },
    [MAX_WIDTH_767]: {
      width: '100%',
    },
  },
  photo_four: {
    marginLeft: '95px',
    width: '547px',
    [MAX_WIDTH_1200]: {
      marginLeft: '0',
      marginTop: '60px',
    },
    [MAX_WIDTH_767]: {
      width: '100%',
    },
  },
}));
