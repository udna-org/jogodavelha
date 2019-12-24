import React, { useState, useEffect } from 'react';
import Box from '../../components/Box'
//import { startGame , endGame } from '../../store/modules/round/actions';
import { Container, Tabuleiro } from './styles';
import { useSelector } from 'react-redux';
import { Verifica, Desenha } from '../../utils/regras';

export default function GameBoard() {
  const [winner, setWinner] = useState([[]])
  const [draw, setDraw] = useState([])
  const tabuleiro = useSelector(state => state.round.tabuleiro)
  const tema = useSelector(state => state.theme.cor)

  useEffect(()=>{
    setDraw(Array(9).fill(false))
  },[])
  // const endGame = useSelector(state => state.round.endGame)
  // const dispatch = useDispatch()

  // Percorre o tabuleiro em busca de um vencedor a cada atualização 
  useEffect(() => {
    setWinner(Verifica(tabuleiro))
  }, [tabuleiro])

  // Ganhador consagrado \o/
  useEffect(()=> {
    setDraw(Desenha(tabuleiro, winner))
  },[tabuleiro, winner])

  
  function renderBox(valor, index, draw){
    return(
      <Box key={index} index={index} cor={draw ? "draw[index].toString() ": "deuruim"} >
        {valor} 
      </Box> 
    )
  }

  return (
    <Container tema={tema}>
      <Tabuleiro> 
        {tabuleiro.map((valor, index) => renderBox(valor, index, draw))}     
      </Tabuleiro>
    </Container>
  );
}
//       <h1> Vamos Jogar? </h1>
