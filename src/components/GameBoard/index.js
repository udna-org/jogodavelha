import React, { useState, useEffect } from 'react';
import Box from '../../components/Box'
import { Container, Tabuleiro } from './styles';

import { updateGameBoardSuccess } from '../../store/modules/round/actions';


export default function GameBoard() {
  const [Board, setBoard] = useState([])
  const [jogador, setJogador] = useState(' ')
  const [ganhador, setGanhador] = useState('_')
  const count = 0;
  const [gameOver, setGameOver] = useState(false);

  // Inicializando tabuleiro 
  useEffect(()=>{
    setBoard(Array(9).fill("o"))
    setGameOver(false)
  },[gameOver])

  useEffect(() => {
    updateGameBoardSuccess(Board)
  }, [Board])


  function renderBox(value, index){
    return(
      <Box key={index} index={index}>{jogador}</Box> 
    )
  }

  return (
    <Container>
      <h1> Vamos Jogar? </h1>
      <Tabuleiro> 
        {Board.map((square, index) => renderBox(square,index))}     
      </Tabuleiro>
    </Container>
  );
}
