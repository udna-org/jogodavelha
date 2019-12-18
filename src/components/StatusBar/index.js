import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { startGame } from '../../store/modules/round/actions'
import { Container } from './styles';

export default function StatusBar( ) {
  const index = useSelector(state => state.round.next)
  const proximo = useSelector(state => state.round.valores[index])
  const dispatch = useDispatch()

  function restart(){
    dispatch(startGame(0))
  }
  
  return (
    <Container>
      <h2> Vez do jogador <span> { proximo }</span> </h2>
      <button onClick={restart}> REINICIAR </button>
    </Container>
  );
}
