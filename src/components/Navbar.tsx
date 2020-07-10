import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiSettings, FiMenu } from 'react-icons/fi';

import Nav from './Nav';

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-navbar);
  height: 50px;
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
    width: var(--size-logo);
    font: inherit;
    font-weight: bold;
    color: var(--text-primary);
    appearance: none;
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
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
    &.menu {
      @media (min-width: 600px) {
        display: none;
      }
    }
  }
`;

type NavbarProps = {
  toggleSettings: () => void;
  toggleDrawer: () => void;
  openJoinModal: () => void;
};

const Navbar = ({
  toggleSettings,
  toggleDrawer,
  openJoinModal,
}: NavbarProps) => {
  return (
    <StyledNavbar>
      <NavLink className="header__logo" to="/">
        iSleepMusic
      </NavLink>
      <Nav />
      <button className="nav-button" onClick={openJoinModal}>
        Join
      </button>
      <button className="nav-button" onClick={toggleSettings}>
        <FiSettings style={{ width: '30px' }} />
      </button>
      <button className="nav-button menu" onClick={toggleDrawer}>
        <FiMenu />
      </button>
    </StyledNavbar>
  );
};

export default Navbar;
