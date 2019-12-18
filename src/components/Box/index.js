import React from 'react';

import { useDispatch } from 'react-redux';
import { updateGameBoardSuccess } from '../../store/modules/round/actions';

import { Container } from './styles';

export default function Box({ children, index, light }) {

  const dispatch = useDispatch()

  function handleClick(index){
    dispatch(updateGameBoardSuccess(index))
  }

  return (
    <Container>
      <button type="button" onClick={() => handleClick(index)} disabled={light} > {children} </button>
    </Container>
  );
}
