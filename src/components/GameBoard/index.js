import React, { useState } from 'react';
import Box from '../../components/Box'
import { Container, Tabuleiro } from './styles';

export default function GameBoard() {
  const [jogadas, setJogadas] = useState(["x","o","x","o","x","o","x","o", "x"])

  return (
    <Container>
      <h1> Vamos Jogar? </h1>
      <Tabuleiro>
        <Box className={1}> {jogadas[0]} </Box>
        <Box className={2}> {jogadas[1]} </Box>
        <Box className={3}> {jogadas[2]} </Box>

        <Box className={4}> {jogadas[8]} </Box>
        <Box className={5}> {jogadas[0]} </Box>
        <Box className={6}> {jogadas[0]} </Box>

        <Box className={7}> {jogadas[0]} </Box>
        <Box className={8}> {jogadas[0]} </Box>
        <Box className={9}> {jogadas[0]} </Box>
      </Tabuleiro>
    </Container>
  );
}
