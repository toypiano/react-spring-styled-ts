import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, useTransition } from 'react-spring';
import { Route, Switch, useLocation } from 'react-router-dom';

import './App.css';

import SideDrawer from './components/SideDrawer';
import Settings from './components/Settings';
import Page from './components/Page';
import Navbar from './components/Navbar';
import JoinModal from './components/JoinModal';

// Wrap spring's animated element with styled
const StyledApp = styled(animated.div)`
  header {
  }

  main {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    h1 {
      margin-top: 3em;
      text-align: center;
    }
  }
`;

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeAnimation = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  const location = useLocation();
  const routeTransition = useTransition(
    location,
    (location) => location.pathname,
    {
      from: {
        opacity: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: `translate3d(100%,0,0)`,
      },
      enter: {
        opacity: 1,
        transform: `translate3d(0,0,0)`,
      },
      leave: {
        opacity: 0,
        transform: `translate3d(-50%,0,0)`,
      },
    }
  );

  const toggleDrawer = () => setIsNavOpen(!isNavOpen);
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    // pass animation directly to the styled component
    <StyledApp style={fadeAnimation}>
      <Navbar
        toggleSettings={toggleSettings}
        toggleDrawer={toggleDrawer}
        openJoinModal={() => setIsModalOpen(true)}
      />
      <SideDrawer
        show={isNavOpen}
        closeSideDrawer={() => setIsNavOpen(false)}
      />
      <main>
        <JoinModal
          show={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
        <Settings show={isSettingsOpen} />
        {routeTransition.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/" exact>
                <Page bg="secondary">Home</Page>
              </Route>
              <Route path="/about">
                <Page bg="info">About</Page>
              </Route>
              <Route path="/store">
                <Page bg="accent">Store</Page>
              </Route>
              <Route path="/music" exact>
                <Page bg="primary">Music</Page>
              </Route>
            </Switch>
          </animated.div>
        ))}
      </main>
    </StyledApp>
  );
};

export default App;
