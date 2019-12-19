import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import GameBoard from '../../components/GameBoard';
import StatusBar from '../../components/StatusBar';

import { Container } from './styles';

export default function Home() {
  const theme = useSelector(state => state.theme.cor)

  return (
    <Container theme={theme}>
      <Header />       
      <GameBoard />
      <StatusBar />
    </Container>
  );
}
