import React, {useSelector, useDispatch } from 'react';

/** actions relacionada a jogada */
//import { jodagaRequest } from '~/store/modules/round/actions';


import { Container } from './styles';

export default function Box({ children, index }) {

  //const jogada = useSelector(state => state.round.jogador)
  //const tabuleiro = useSelector(state => state.round.tabuleiro)
  //const dispatch = useDispatch()

  function handleClick(index){
   // dispatch(jodagaRequest(index))
  }

  return (
    <Container>
      <button type="button" onClick={() => handleClick(index)}> {children}</button>
    </Container>
  );
}
