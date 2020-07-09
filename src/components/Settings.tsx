import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const StyledSettings = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  .settings__left {
    width: 30%;
    height: 100%;
    background: black;
    padding: 2em 1em;
    h2 {
      text-align: center;
    }
  }
  .settings__right {
    width: 70%;
    height: 100%;
    background: var(--cl-accent);
  }
`;

type SettingsProps = {
  show: boolean;
};

const Settings = ({ show }: SettingsProps) => {
  const { x } = useSpring({
    x: show ? 0 : 100,
  });
  return (
    <StyledSettings>
      <animated.div
        className="settings__left"
        style={{
          transform: x.interpolate((x) => `translate3d(-${x}%,0,0)`),
        }}
      >
        <h2>Settings</h2>
      </animated.div>
      <animated.div
        className="settings__right"
        style={{
          transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
        }}
      ></animated.div>
    </StyledSettings>
  );
};

export default Settings;
