import React from 'react';
import { Route } from 'react-router-dom';
import Page from './Page';

type RoutesProps = {};

const Routes = (props: RoutesProps) => {
  return (
    <>
      <Route path="/" exact>
        <Page bg="secondary">Home</Page>
      </Route>
      <Route path="/about">
        <Page bg="info">About</Page>
      </Route>
      <Route path="/store">
        <Page bg="accent">Store</Page>
      </Route>
      <Route path="/music" exact>
        <Page bg="primary">Music</Page>
      </Route>
    </>
  );
};

export default Routes;
