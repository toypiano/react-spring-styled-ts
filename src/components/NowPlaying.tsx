import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const StyledNowPlaying = styled.div`
  position: absolute;
  z-index: var(--z-settings);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  .settings__left {
    z-index: 1000;
    height: 100%;
    width: 30%;
    padding: 3em;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
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

type NowPlayingProps = {
  show: boolean;
};

const NowPlaying = ({ show }: NowPlayingProps) => {
  const { x } = useSpring({
    x: show ? 0 : 100,
  });
  return (
    <StyledNowPlaying>
      <animated.div
        className="settings__left"
        style={{
          transform: x.interpolate((x) => `translate3d(-${x}%,0,0)`),
        }}
      >
        <h2>Now Playing</h2>
      </animated.div>
      <animated.div
        className="settings__right"
        style={{
          transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
        }}
      ></animated.div>
    </StyledNowPlaying>
  );
};

export default NowPlaying;
