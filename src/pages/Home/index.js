import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import GameBoard from '../../components/GameBoard';
import StatusBar from '../../components/StatusBar';

import { Container } from './styles';

export default function Home() {
  const theme = useSelector(state => state.theme.cor)
  //const theme = localStorage.getItem("tema")
  console.log(localStorage.getItem("tema"))
  return (
    <Container theme={theme}>
      <Header />       
      <GameBoard />
      <StatusBar tema={theme}/>
    </Container>
  );
}
