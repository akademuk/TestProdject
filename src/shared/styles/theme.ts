export const Theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    blackOverlay: 'rgba(0, 0, 0, 0.45)',
    grey: '#F7F7F7',
    fontsBlack: 'rgba(0, 0, 0, 0.6)',
    btnBlack: 'rgba(0, 0, 0, 0.7)',
    borderGrey: '#999999',
    borderError: '#960A0A66',
    warnWhite: '#F5EFEE',
    overlayColor: '#E6D5D2',
    titleBlack: 'rgba(0, 0, 0, 0.8)',
  },
  fonts: {
    GraphikLCG: {
      Light: 'GraphikLCG-Light',
      Medium: 'GraphikLCG-Medium',
      Regular: 'GraphikLCG-Regular',
      Semibold: 'GraphikLCG-Semibold',
    },
    PlayfairDisplay: {
      Regular: 'PlayfairDisplay-Regular',
      Bold: 'PlayfairDisplay-Bold',
    },
  },
};

export type IAppTheme = typeof Theme;
