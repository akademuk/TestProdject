import React from 'react';

import { NAVIGATION_ITEMS } from '../../constans';
import { useStyles } from './styles';

const Navigation: React.FC<{ isBlack?: boolean }> = ({ isBlack }) => {
  const classes = useStyles();
  return (
    <ul className={classes.navigation}>
      {NAVIGATION_ITEMS.map(({ key, name, path }) => (
        <a
          key={key}
          href={path}
          className={`${isBlack ? classes.black : classes.white}`}
        >
          {name}
        </a>
      ))}
    </ul>
  );
};

export default Navigation;
