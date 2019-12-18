import React, { useState, useEffect } from 'react';
import Box from '../../components/Box'
import { updateGameBoardSuccess, startGame , endGame} from '../../store/modules/round/actions';
import { Container, Tabuleiro } from './styles';
import { useSelector } from 'react-redux';


export default function GameBoard() {
  const [gameOver, setGameOver] = useState(false);
  const tabuleiro = useSelector(state => state.round.tabuleiro)

  // Inicializando tabuleiro 
  useEffect(() => {
    startGame(0)
    setGameOver(false)
  },[gameOver])

  // Varrer o tabuleiro em busca de um vencedor
  useEffect(() => {
    
  }, [tabuleiro])

  // se já existe ganhador
  useEffect(()=>{
    endGame()
  },[])

  function renderBox(valor, index){
    return(
      <Box key={index} index={index} light={true} value={valor}>
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
