import { createUseStyles } from 'react-jss';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  wrapper: {
    marginTop: '90px',
    padding: '0 100px',
    display: 'grid',
    gridGap: '15px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px), 1fr)',
    '& div': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transitionDuration: '1s',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2em',
      overflow: 'hidden',
    },
  },
}));
