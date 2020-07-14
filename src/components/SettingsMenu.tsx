import React from 'react';
import styled from 'styled-components';

import Accordion from './Accordion';

const StyledSettingsMenu = styled.div`
  position: absolute;
  top: var(--navbar-height);
  .settings {
    background: black;
    padding: 1em;
    border-radius: var(--border-radius);
    h2 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        margin: 0.5em 0;
        font-size: 1rem;
      }
    }
  }
`;

type SettingsMenuProps = {
  show: boolean;
};

const SettingsMenu = (props: SettingsMenuProps) => {
  return (
    <StyledSettingsMenu>
      <Accordion show={props.show} className="settings">
        <h2>Settings</h2>
        <ul>
          <li>Timer</li>
          <li>EQ</li>
          <li>Theme</li>
          <li>Peace</li>
        </ul>
      </Accordion>
    </StyledSettingsMenu>
  );
};

export default SettingsMenu;
