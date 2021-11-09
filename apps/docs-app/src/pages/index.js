import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Redirect to="/docs/api" />
    </>
  );
  // return <Redirect to="/docs/intro" />;
}
