import ARTICLE_IMAGE from 'assets/images/article-icon.svg';
import PLAY_IMAGE from 'assets/images/play-icon.png';
import { createUseStyles } from 'react-jss';
import { MAX_WIDTH_1000, MAX_WIDTH_767 } from 'shared/constans';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '90px',
    [MAX_WIDTH_1000]: {
      marginTop: '40px',
      justifyContent: 'space-between',
    },
    [MAX_WIDTH_767]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  videos: {
    marginTop: '160px',
    [MAX_WIDTH_1000]: {
      marginTop: '60px',
      padding: '0 50px',
    },
    [MAX_WIDTH_767]: {
      marginTop: '50px',
      padding: '0 40px',
    },
  },
  title: {
    fontFamily: theme.fonts.PlayfairDisplay.Bold,
    display: 'block',
    textAlign: 'center',
    fontSize: '24px',
    color: theme.colors.titleBlack,
    textTransform: 'uppercase',
    [MAX_WIDTH_1000]: {
      fontSize: '18px',
    },
  },
  video: {
    '&:first-child': {
      width: '283px',
      marginRight: '55px',
      [MAX_WIDTH_1000]: {
        width: '206px',
        marginRight: '0',
      },
      '& video': {
        height: '504px',
        [MAX_WIDTH_1000]: {
          height: '360px',
        },
      },
    },
    '&:nth-of-type(2)': {
      width: '353px',
      marginRight: '55px',
      [MAX_WIDTH_1000]: {
        width: '210px',
        marginRight: '0',
      },
      [MAX_WIDTH_767]: {
        marginTop: '30px',
      },
      '& video': {
        height: '648px',
        [MAX_WIDTH_1000]: {
          height: '386px',
        },
      },
    },
    '&:last-child': {
      width: '294px',
      [MAX_WIDTH_1000]: {
        width: '210px',
      },
      [MAX_WIDTH_767]: {
        marginTop: '30px',
      },
      '& video': {
        height: '534px',
        [MAX_WIDTH_1000]: {
          height: '366px',
        },
      },
    },
  },
  videoWrapper: {
    position: 'relative',
  },
  playIcon: {
    width: '85px',
    height: '85px',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: 0,
    right: 0,
    margin: '0 auto',
    backgroundImage: `url(${PLAY_IMAGE})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 5,
    cursor: 'pointer',
    [MAX_WIDTH_1000]: {
      width: '43px',
      height: '43px',
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
  },
}));
