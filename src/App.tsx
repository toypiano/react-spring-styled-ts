import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import SideDrawer from './components/SideDrawer';
import { FiSettings, FiMenu } from 'react-icons/fi';

// Wrap spring's animated element with styled
const StyledApp = styled(animated.div)`
  header {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: calc(10px + 2vmin);
    padding: 0.5rem 2rem;
    .header__logo {
      font-size: 1.6rem;
      margin: 0 auto 0 0;
    }
    .menu-button {
      height: 100%;
      width: var(--size-logo);
      margin-left: 5px;
      appearance: none;
      background: transparent;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      z-index: var(--z-nav-item);

      svg {
        width: 100%;
        height: 100%;
        transition: color 0.3s ease;
        color: var(--text-secondary);
      }
      &:hover {
        svg {
          color: var(--text-primary);
        }
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
        <h1 className="header__logo">React Spring</h1>
        <button className="menu-button" onClick={toggleDrawer}>
          <FiSettings style={{ width: '30px' }} />
        </button>
        <button className="menu-button" onClick={toggleDrawer}>
          <FiMenu />
        </button>

        <SideDrawer
          show={isNavOpen}
          closeSideDrawer={() => setIsNavOpen(false)}
        />
      </header>
      <main></main>
    </StyledApp>
  );
};

export default App;
