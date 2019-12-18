import React from 'react';
import { useDispatch } from 'react-redux';
import { updateGameBoardSuccess } from '../../store/modules/round/actions';
import { Container } from './styles';

export default function Box({ valor, children, index, light }) {

  const dispatch = useDispatch()

  function handleClick(index){
    dispatch(updateGameBoardSuccess(index))
  }

  return (
    <Container>
      <button type="button" onClick={() => handleClick(index)} value={valor} > {children} </button>
    </Container>
  );
}
