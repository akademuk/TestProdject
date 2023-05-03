import { createUseStyles } from 'react-jss';
import { IAppTheme } from 'shared/styles/theme';

import ARTICLE_IMAGE from '../../assets/images/article-icon.svg';
import STARS_IMAGE from '../../assets/images/stars.svg';
import { MAX_WIDTH_1200, MAX_WIDTH_767 } from '../../shared/constans';

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
    [MAX_WIDTH_1200]: {
      marginTop: '50px',
      fontSize: '24px',
    },
    [MAX_WIDTH_767]: {
      fontSize: '18px',
    },
  },
  text: {
    fontFamily: theme.fonts.GraphikLCG.Regular,
    fontSize: '16px',
    color: theme.colors.black,
    lineHeight: '24px',
    marginTop: '44px',
    position: 'relative',
    [MAX_WIDTH_767]: {
      textAlign: 'center',
    },
    '&:before': {
      top: '-30px',
      position: 'absolute',
      content: 'close-quote',
      width: '18px',
      height: '24px',
      backgroundImage: `url(${ARTICLE_IMAGE})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
    },
    '&:after': {
      content: 'close-quote',
      position: 'absolute',
      bottom: '-10px',
      width: '63px',
      height: '35px',
      right: '-6%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: `url(${STARS_IMAGE})`,
      textAlign: 'center',
      [MAX_WIDTH_1200]: {
        display: 'none',
      },
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    [MAX_WIDTH_767]: {
      flexDirection: 'column',
    },
    '&:nth-of-type(2)': {
      marginTop: '65px',
      [MAX_WIDTH_767]: {
        marginTop: 0,
      },
    },
    '&:nth-of-type(3)': {
      marginTop: '65px',
      [MAX_WIDTH_767]: {
        marginTop: 0,
      },
    },
  },
  item: {
    width: '400px',
    [MAX_WIDTH_1200]: {
      width: '324px',
    },
    [MAX_WIDTH_767]: {
      width: '100%',
      marginTop: '50px',
      '&:first-child': {
        marginTop: 0,
      },
    },
  },
  photo: {
    width: '100%',
    objectFit: 'cover',
  },
  wrapper: {
    maxWidth: '1100px',
    margin: '68px auto 0',
    [MAX_WIDTH_1200]: {
      maxWidth: '668px',
    },
    [MAX_WIDTH_767]: {
      maxWidth: 'unset',
      fontSize: '18px',
    },
  },
}));
