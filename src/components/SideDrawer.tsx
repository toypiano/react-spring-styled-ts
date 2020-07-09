import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import Backdrop from './Backdrop';
import Nav from './Nav';

const StyledSideDrawer = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 400px;
  padding: 2em 1em;
  background-color: var(--cl-primary);
  z-index: var(--z-side-drawer);
  box-shadow: var(--box-shadow);
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
        <Nav aside />
      </StyledSideDrawer>
    </>
  );
};

export default SideDrawer;
