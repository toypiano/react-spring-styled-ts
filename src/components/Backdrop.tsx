import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const StyledBackdrop = styled(animated.div)`
  position: fixed;
  z-index: var(-z-backdrop);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;

type BackdropProps = {
  show: boolean;
  onClick?: () => void;
};

const Backdrop = ({ show, onClick }: BackdropProps) => {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    // Wrap the mapped list inside React Fragment to avoid
    // "type 'Element[]' is not a constructor function for JSX elements"
    // https://github.com/microsoft/TypeScript/issues/33487
    <>
      {show &&
        transitions.map(({ item, props, key }) => (
          <StyledBackdrop
            key={key}
            style={props}
            onClick={onClick}
          ></StyledBackdrop>
        ))}
    </>
  );
};

export default Backdrop;
