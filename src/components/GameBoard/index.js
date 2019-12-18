import React, { useState, useEffect } from 'react';
import Box from '../../components/Box'
import { startGame , endGame } from '../../store/modules/round/actions';
import { Container, Tabuleiro } from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { Verifica } from '../../utils/EndGame'

export default function GameBoard() {
  const [winner, setWinner] = useState([])
  const [gameOver, setGameOver] = useState(false);
  const tabuleiro = useSelector(state => state.round.tabuleiro)
  //const dispatch = useDispatch()

  // Inicializando tabuleiro 
  useEffect(() => {
    startGame(0)
    setGameOver(false)
  },[gameOver])

  // Varrer o tabuleiro em busca de um vencedor
  useEffect(() => {
    setWinner(Verifica(tabuleiro))
  }, [tabuleiro])

  // se já existe ganhador
  useEffect(()=>{
    endGame()
    console.log("Jogo acabou")
  },[winner])

  function colorizer(index){
    winner.map(linha => {
        if (index === linha[0] || index === linha[1] || index === linha[2]) {
          return true
        } else {
          return false
        }
      }
    )
  }
  
  function renderBox(valor, index){
    return(
      <Box key={index} index={index} light={winner && colorizer(index)}>
        {valor} 
      </Box> 
    )
  }

  return (
    <Container>
      <h1> Vamos Jogar? </h1>
      <Tabuleiro> 
        {tabuleiro.map((valor, index) => renderBox(valor, index))}     
      </Tabuleiro>
    </Container>
  );
}
