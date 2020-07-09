import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledPage = styled.div<{ bg?: string }>`
  position: absolute;
  z-index: var(--z-page);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.bg ? `var(--cl-${props.bg})` : 'black'};
  font-size: 4rem;
`;

type PageProps = {
  children?: ReactNode;
  bg?: string;
};

const Page = ({ children, bg }: PageProps) => {
  return <StyledPage bg={bg}>{children}</StyledPage>;
};

export default Page;
