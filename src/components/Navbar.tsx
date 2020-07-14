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
  height: var(--navbar-height);
  z-index: var(--z-navbar);
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
    display: block;
    height: 100%;
    padding: 0;
    margin-left: 1em;
    white-space: nowrap;
    /* width: var(--size-logo); */
    font: inherit;
    font-weight: bold;
    color: var(--text-secondary);
    appearance: none;
    background: transparent;
    border: none;
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
      height: 100%;
      width: 40px;
      @media (min-width: 800px) {
        display: none;
      }
    }
    &.icon {
      margin-top: 2px;
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
        className="nav-button icon"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        onBlur={() => setIsSettingsOpen(false)}
      >
        <FiSettings style={{ width: '30px' }} />
      </button>
      <SettingsMenu show={isSettingsOpen} />
      <button className="nav-button menu icon" onClick={toggleDrawer}>
        <FiMenu />
      </button>
    </StyledNavbar>
  );
};

export default Navbar;
