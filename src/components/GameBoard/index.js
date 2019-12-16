import React, { useState, useEffect } from 'react';
import Box from '../../components/Box'
import { updateGameBoardSuccess, startGame , endGame} from '../../store/modules/round/actions';

import { Container, Tabuleiro } from './styles';

import {useSelector, useDispatch} from 'react-redux';


export default function GameBoard() {
  // const [ganhador, setGanhador] = useState()
  const [gameOver, setGameOver] = useState(false);
  const tabuleiro = useSelector(state => state.round.tabuleiro)

  // Inicializando tabuleiro 
  useEffect(() => {
    startGame()
    setGameOver(false)
  },[gameOver])

  // Atualizar tabuleiro 
  useEffect(() => {
    updateGameBoardSuccess(tabuleiro)
    console.tron.log(tabuleiro)
  }, [tabuleiro])

  // se já existe ganhador
  useEffect(()=>{
    endGame()
  },[])

  function renderBox(value, index){
    return(
      <Box key={index} index={index} light={true} value={value}>
        {value} 
      </Box> 
    )
  }

  return (
    <Container>
      <h1> Vamos Jogar? </h1>
      <Tabuleiro> 
        {tabuleiro.map((square, index) => renderBox(square,index))}     
      </Tabuleiro>
    </Container>
  );
}
