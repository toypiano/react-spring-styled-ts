import React from 'react';
import { animated, useTransition } from 'react-spring';
import { Switch, useLocation } from 'react-router-dom';

import Routes from './Routes';

type AnimatedRoutesProps = {};

const AnimatedRoutes = (props: AnimatedRoutesProps) => {
  const location = useLocation();

  const routeTransition = useTransition(
    location,
    (location) => location.pathname,
    {
      from: {
        opacity: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: `translate3d(100%,0,0)`,
      },
      enter: {
        opacity: 1,
        transform: `translate3d(0,0,0)`,
      },
      leave: {
        opacity: 0,
        transform: `translate3d(-50%,0,0)`,
      },
    }
  );
  return (
    <>
      {routeTransition.map(({ item, key, props: transition }) => (
        <animated.div key={key} style={transition}>
          <Switch location={item} />
          <Routes />
        </animated.div>
      ))}
    </>
  );
};

export default AnimatedRoutes;
