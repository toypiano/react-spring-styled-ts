# React Spring with Typescript & Styled-Component

The iteration of [Animating React](https://github.com/toypiano/react-spring) with Typescript & Styled Component.

## Mount/unmount single-component

`Backdrop.tsx`

```tsx
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
      {
        // mount/unmount single-component
        transitions.map(
          ({ item, props, key }) =>
            item && (
              <StyledBackdrop
                key={key}
                style={props}
                onClick={onClick}
              ></StyledBackdrop>
            )
        )
      }
    </>
  );
};
```
