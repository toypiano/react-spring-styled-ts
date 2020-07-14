import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiSettings, FiMenu } from 'react-icons/fi';

import Nav from './Nav';
import SettingsMenu from './SettingsMenu';

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navbar);
  height: var(--navbar-height);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: calc(10px + 2vmin);
  padding: 0.5rem 1rem;

  .header__logo {
    text-decoration: none;
    font-size: 1.6rem;
    color: var(--text-primary);
    font-weight: bold;
    margin: 0 auto 0 0;
  }
  .nav-button {
    height: 100%;
    margin-left: 1em;
    white-space: nowrap;
    /* width: var(--size-logo); */
    font: inherit;
    font-weight: bold;
    color: var(--text-secondary);
    appearance: none;
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--z-nav-item);
    transition: color 0.3s ease;

    svg {
      width: 100%;
      height: 100%;
      transition: color 0.3s ease;
      color: var(--text-secondary);
    }
    &:hover {
      color: var(--text-primary);
      svg {
        color: var(--text-primary);
      }
    }
    &.menu {
      @media (min-width: 800px) {
        display: none;
      }
    }
  }
`;

type NavbarProps = {
  toggleNowPlaying: () => void;
  toggleDrawer: () => void;
  openJoinModal: () => void;
  closeNowPlaying: () => void;
};

const Navbar = ({
  toggleNowPlaying,
  toggleDrawer,
  openJoinModal,
  closeNowPlaying,
}: NavbarProps) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  return (
    <StyledNavbar>
      <NavLink className="header__logo" to="/">
        iSleepMusic
      </NavLink>
      <Nav />
      <button className="nav-button" onClick={openJoinModal}>
        Join
      </button>
      <button
        className="nav-button"
        onClick={toggleNowPlaying}
        onBlur={closeNowPlaying}
      >
        Now Playing
      </button>
      <button
        className="nav-button"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        onBlur={() => setIsSettingsOpen(false)}
      >
        <FiSettings style={{ width: '30px' }} />
      </button>
      <SettingsMenu show={isSettingsOpen} />
      <button className="nav-button menu" onClick={toggleDrawer}>
        <FiMenu />
      </button>
    </StyledNavbar>
  );
};

export default Navbar;
