import React from 'react';

import { Container } from './styles';

export default function StatusBar({ gamer }) {
  return (
    <Container>
      <h2> Vez do jogador <span> { gamer }</span> </h2>
      <button> REINICIAR </button>
    </Container>
  );
}
