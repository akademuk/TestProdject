import { createUseStyles } from 'react-jss';
import { IAppTheme } from 'shared/styles/theme';

export const useStyles = createUseStyles((theme: IAppTheme) => ({
  container: {
    flex: 1,
    width: '100%',
  },
}));
