import React from 'react';
import Button from '../Slider'

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1> Jogo da Velha </h1>
      <Button />
    </Container>
  );
}