import { createUseStyles } from 'react-jss';
import { IAppTheme } from 'shared/styles/theme';

import { MAX_WIDTH_1000, MAX_WIDTH_1200, MAX_WIDTH_767 } from '../../constans';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  wrapper: {
    display: 'flex',
    padding: '140px 90px 60px',
    justifyContent: 'space-between',
    alignItems: 'start',
    [MAX_WIDTH_1200]: {
      padding: '100px 60px 60px',
    },
    [MAX_WIDTH_1000]: {
      padding: '100px 30px 30px',
    },
    [MAX_WIDTH_767]: {
      padding: '50px 38px 36px',
    },
  },
  logo: {
    width: '104px',
    height: '39px',
    cursor: 'pointer',
    [MAX_WIDTH_767]: {
      display: 'none',
    },
  },
  navigation: {
    display: 'flex',
    [MAX_WIDTH_1200]: {
      flexWrap: 'wrap',
    },
    [MAX_WIDTH_767]: {
      width: '100%',
    },
  },
  name: {
    fontFamily: theme.fonts.GraphikLCG.Semibold,
    fontSize: '16px',
    color: theme.colors.black,
  },
  subType: {
    fontFamily: theme.fonts.GraphikLCG.Regular,
    fontSize: '16px',
    color: theme.colors.black,
    marginTop: '7px',
    '&:nth-of-type(2)': {
      marginTop: '16px',
    },
  },
  column: {
    '&:first-child': {
      marginRight: '80px',
      [MAX_WIDTH_1200]: {
        marginRight: '20%',
        width: '50%',
      },
    },
    '&:nth-of-type(2)': {
      marginRight: '40px',
      [MAX_WIDTH_1200]: {
        marginRight: '0%',
        width: '30%',
      },
    },
    '&:nth-of-type(3)': {
      marginRight: '112px',
      [MAX_WIDTH_1200]: {
        marginRight: '20%',
        marginTop: '24px',
        width: '50%',
      },
    },
    '&:nth-of-type(4)': {
      marginRight: '114px',
      [MAX_WIDTH_1200]: {
        marginRight: '0px',
        marginTop: '24px',
        width: '30%',
      },
    },
    '&:nth-of-type(5)': {
      [MAX_WIDTH_1200]: {
        marginTop: '24px',
      },
      [MAX_WIDTH_767]: {
        width: '50%',
      },
    },
  },
}));
