import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const StyledApp = styled.div`
  header {
    display: flex;
  }
  .App-logo {
    width: var(--size-logo);
    height: var(--size-logo);
  }
`;

const App = () => {
  return (
    <StyledApp>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Spring</h1>
      </header>
    </StyledApp>
  );
};

export default App;
