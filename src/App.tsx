import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import './App.css';

import SideDrawer from './components/SideDrawer';
import NowPlaying from './components/NowPlaying';

import Navbar from './components/Navbar';
import JoinModal from './components/JoinModal';
import AnimatedRoutes from './components/AnimatedRoutes';

// Wrap spring's animated element with styled
const StyledApp = styled(animated.div)`
  header {
    max-width: 1200px;
    margin: auto;
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
  const [isNowPlayingOpen, setIsNowPlayingOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeAnimation = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  const toggleDrawer = () => setIsNavOpen(!isNavOpen);
  const toggleNowPlaying = () => setIsNowPlayingOpen(!isNowPlayingOpen);

  return (
    // pass animation directly to the styled component
    <StyledApp style={fadeAnimation}>
      <Navbar
        toggleNowPlaying={toggleNowPlaying}
        toggleDrawer={toggleDrawer}
        openJoinModal={() => setIsModalOpen(true)}
        closeNowPlaying={() => setIsNowPlayingOpen(false)}
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
        <NowPlaying show={isNowPlayingOpen} />
        <AnimatedRoutes />
      </main>
    </StyledApp>
  );
};

export default App;
