import React from 'react';

import { Container } from './styles';

export default function Box({ className, children, handleClick }) {
  console.log(className)
  return (
    <Container>
      <button type="button" onClick={handleClick}> {children}</button>
    </Container>
  );
}
