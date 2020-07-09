import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import Backdrop from './Backdrop';

const StyledSideDrawer = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 400px;
  padding: 1em;
  background-color: var(--cl-primary);
  z-index: var(--z-side-drawer);

  nav {
    a {
      display: block;
      text-decoration: none;
      font-size: 4rem;
      color: var(--text-secondary);
      transition: 0.3s ease border;
      border-bottom: 5px solid transparent;
      &:hover {
        border-bottom: 5px solid var(--cl-accent);
        color: var(--text-primary);
      }
    }
  }
`;

type SideDrawerProps = {
  show: boolean;
  closeSideDrawer: () => void;
};

const SideDrawer = ({ show, closeSideDrawer }: SideDrawerProps) => {
  const animation = useSpring({
    transform: show ? `translate3d(0,0,0)` : `translate3d(-100%,0,0)`,
  });

  return (
    <>
      <Backdrop show={show} onClick={closeSideDrawer} />
      <StyledSideDrawer style={animation} onClick={closeSideDrawer}>
        <nav>
          <a href="#/">Home</a>
          <a href="#/">About</a>
          <a href="#/">Store</a>
          <a href="#/">Music</a>
        </nav>
      </StyledSideDrawer>
    </>
  );
};

export default SideDrawer;
