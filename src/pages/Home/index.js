import React from 'react';
import Header from '../../components/Header'
import GameBoard from '../../components/GameBoard'
import StatusBar from '../../components/StatusBar'

import { Container } from './styles';

export default function Home() {

  return (
    <Container>
      <Header />
      <GameBoard />
      <StatusBar />
    </Container>
  );
}
