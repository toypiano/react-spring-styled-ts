import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import SideDrawer from './components/SideDrawer';

// Wrap spring's animated element with styled
const StyledApp = styled(animated.div)`
  header {
    display: flex;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    padding: 0 5%;
  }
  .App-logo {
    width: var(--size-logo);
    height: var(--size-logo);
  }
  .menu-button {
    margin-left: auto;
    appearance: none;
    background: transparent;
    width: var(--size-logo);
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: var(--z-nav-item);
    padding: 5px;
    .bar {
      width: 100%;
      height: 3px;
      transition: background-color 0.3s ease;
      background-color: var(--text-secondary);
    }
    &:hover {
      .bar {
        background-color: var(--text-primary);
      }
    }
  }
  main {
    h1 {
      margin-top: 3em;
      text-align: center;
    }
  }
`;

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const fadeAnimation = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  const toggleDrawer = () => setIsNavOpen(!isNavOpen);

  return (
    // pass animation directly to the styled component
    <StyledApp style={fadeAnimation}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="menu-button" onClick={toggleDrawer}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>

        <SideDrawer
          show={isNavOpen}
          closeSideDrawer={() => setIsNavOpen(false)}
        />
      </header>
      <main>
        <h1>React Spring Examples</h1>
      </main>
    </StyledApp>
  );
};

export default App;
