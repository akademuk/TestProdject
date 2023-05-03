import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import AboutUs from '../pages/about-us';
import { HomePage } from '../pages/home-page';
import Result from '../pages/result';
import SeasonTickets from '../pages/season-tickets';
import useDisableBodyScroll from '../services/hooks/useDisableBodyScroll/useDisableBodyScroll';
import { Router, Routes, Route, Navigate } from '../services/router';
import Footer from '../shared/components/footer';
import MobileMenu from '../shared/components/Modals/MobileMenu';
import TestModal from '../shared/components/Modals/TestModal';
import WorkModal from '../shared/components/Modals/WorkModal/WorkModal';

export const APP_ROUTES = {
  HOME: '/',
  ABOUT_US: 'about-us',
  SEASON_TICKETS: 'season-tickets',
  RESULT: 'result',
  DEFAULT: '*',
};

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  pages: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100vw',
    position: 'relative',
    zIndex: 1,
  },
});

export const AppRoutes: React.FC = () => {
  const classes = useStyles();
  const [isTestModalOpen, setTestModalOpen] = useState<boolean>(false);
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const [isWorkModal, setWorkModal] = useState<boolean>(false);
  useDisableBodyScroll(isTestModalOpen);
  return (
    <Router>
      <div className={classes.container}>
        <div className={classes.pages}>
          {isTestModalOpen && (
            <TestModal
              isOpen={isTestModalOpen}
              setTestModalOpen={setTestModalOpen}
            />
          )}
          {isMobileMenu && (
            <MobileMenu isOpen={isMobileMenu} setMobileMenu={setMobileMenu} />
          )}
          {isWorkModal && (
            <WorkModal isOpen={isWorkModal} setWorkModal={setWorkModal} />
          )}
          <Routes>
            <Route
              path={APP_ROUTES.HOME}
              element={
                <HomePage
                  setWorkModal={setWorkModal}
                  setMobileMenu={setMobileMenu}
                  isTestModalOpen={isTestModalOpen}
                  setTestModalOpen={setTestModalOpen}
                />
              }
            />
            <Route
              path={APP_ROUTES.ABOUT_US}
              element={<AboutUs setMobileMenu={setMobileMenu} />}
            />
            <Route
              path={APP_ROUTES.SEASON_TICKETS}
              element={<SeasonTickets setMobileMenu={setMobileMenu} />}
            />
            <Route
              path={APP_ROUTES.RESULT}
              element={<Result setMobileMenu={setMobileMenu} />}
            />
            <Route
              path={APP_ROUTES.DEFAULT}
              element={<Navigate replace to={APP_ROUTES.HOME} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
