import React, { useState, useEffect } from 'react';
import Box from '../../components/Box'
import { updateGameBoardSuccess } from '../../store/modules/round/actions';

import { Container, Tabuleiro } from './styles';

export default function GameBoard() {
  const [Board, setBoard] = useState([])
  const [playerRound, setplayerRound] = useState('X')
  const [ganhador, setGanhador] = useState()
  const count = 0;
  const [gameOver, setGameOver] = useState(false);

  // Inicializando tabuleiro 
  useEffect(()=>{
    setBoard(Array(9).fill("O"))
    setGameOver(false)
    setGanhador(null)
  },[gameOver])

  useEffect(() => {
    updateGameBoardSuccess(Board)
  }, [Board])

  function next(){
    setplayerRound(playerRound === "X" ? "O" : "X")
  }


  function renderBox(value, index){
    return(
      <Box 
        key={index} 
        index={index}
        onClick={() => {
          next(playerRound);
        }}
        light={false}
      >
          {playerRound} 
      </Box> 
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
