import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav<{ aside?: boolean }>`
  display: ${(props) => (props.aside ? 'block' : 'none')};
  width: 100%;
  max-width: 300px;
  margin-left: ${(props) => (props.aside ? 0 : '2em')};
  flex-direction: ${(props) => (props.aside ? 'column' : 'row')};
  justify-content: space-around;
  align-items: ${(props) => (props.aside ? 'flex-start' : 'center')};
  position: relative;
  a {
    display: block;
    width: ${(props) => (props.aside ? '100%' : 'auto')};
    text-decoration: none;
    font-size: ${(props) => (props.aside ? '4rem' : '1.2rem')};
    color: var(--text-secondary);
    transition: 0.3s ease border;
    border-bottom: 5px solid transparent;
    /* To push link back down after border bottom of 5px */
    padding-top: 5px;
    &:hover {
      border-bottom: 5px solid var(--cl-accent);
      color: var(--text-primary);
    }
  }
  @media (min-width: 800px) {
    display: flex;
  }
`;

type NavProps = {
  aside?: boolean;
};

const Nav = (props: NavProps) => {
  return (
    <StyledNav {...props}>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/store">Store</NavLink>
      <NavLink to="/music">Music</NavLink>
    </StyledNav>
  );
};

export default Nav;
