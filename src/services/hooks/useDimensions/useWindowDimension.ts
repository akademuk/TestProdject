import { useState, useEffect } from 'react';
import { DESKTOP_WIDTH, EDimensions, TABLET_WIDTH } from 'shared/constans';

function getWindowDimensions() {
  const { matchMedia } = window;

  if (matchMedia(`(min-width: ${DESKTOP_WIDTH}px)`).matches)
    return EDimensions.DESKTOP;
  if (
    matchMedia(
      `(min-width: ${TABLET_WIDTH}px) and (max-width: ${DESKTOP_WIDTH}px)`
    ).matches
  )
    return EDimensions.MEDIUM;
  else matchMedia(`(max-width: ${TABLET_WIDTH}px)`).matches;
  return EDimensions.SMALL;

  return EDimensions.UNKNOWN;
}

export const useWindowDimensions = () => {
  const [windowDimension, setWindowDimension] = useState<EDimensions>(
    EDimensions.DESKTOP
  );

  useEffect(() => {
    function handleResize() {
      const dimension = getWindowDimensions();
      if (dimension !== windowDimension) setWindowDimension(dimension);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return windowDimension;
};
