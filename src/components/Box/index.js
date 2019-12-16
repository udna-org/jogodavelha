import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
/** actions relacionada a jogada */
import { updateGameBoardSuccess } from '../../store/modules/round/actions';

import { Container } from './styles';

export default function Box({ valor, children, index, light }) {

  const jogada = useSelector(state => state.round.next)
  const tabuleiro = useSelector(state => state.round.tabuleiro)
  const dispatch = useDispatch()

  //console.tron.log(tabuleiro)
  
  // Verificar se lugar está preenchido fazer alteração aqui dentro 
  useEffect(() => {}, [])

  function handleClick(index, jogada){
  
    //console.tron.log("c",valor)
    dispatch(updateGameBoardSuccess(jogada, index))
    console.tron.log(tabuleiro)
  }


  return (
    <Container>
      <button type="button" onClick={() => handleClick(index, jogada)} value={valor} > {children} </button>
    </Container>
  );
}
