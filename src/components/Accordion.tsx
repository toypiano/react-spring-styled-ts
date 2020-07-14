import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  RefObject,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from 'react-spring';

type AccordionProps = {
  children: ReactNode;
  show: boolean;
  className?: string;
};

const Accordion = (props: AccordionProps) => {
  const [observedElementRef, measure] = useMeasure();
  const contentHeight = measure.height + measure.top * 2;
  const animation = useSpring({
    height: props.show ? contentHeight : 0,
    overflow: 'hidden',
    config: {
      tension: 300,
      clamp: true, // to force clean closing (stops spring when it overshoots the boundaries)
    },
  });
  return (
    <animated.div style={animation}>
      <div className={props.className} ref={observedElementRef}>
        {props.children}
      </div>
    </animated.div>
  );
};

export default Accordion;

type Measure = {
  top: number;
  left: number;
  width: number;
  height: number;
};

/**
 * Returns the bound element's updated size
 */
function useMeasure(): [RefObject<HTMLDivElement>, Measure] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [measure, setMeasure] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const [resizeObserver] = useState(
    () =>
      new ResizeObserver(([entry]) =>
        setMeasure({
          top: entry.contentRect.top,
          left: entry.contentRect.left,
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      )
  );

  useEffect(() => {
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return resizeObserver.disconnect;
  }, [resizeObserver]);

  return [ref, measure];
}
