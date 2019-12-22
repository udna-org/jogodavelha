import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import GameBoard from '../../components/GameBoard';
import StatusBar from '../../components/StatusBar';

import { Container } from './styles';

export default function Home() {
  let theme = useSelector(state => state.theme.cor)
  //const theme = Boolean(localStorage.getItem("tema"))
  return (
    <Container theme={theme}>
      <Header />       
      <GameBoard />
      <StatusBar tema={theme}/>
    </Container>
  );
}
