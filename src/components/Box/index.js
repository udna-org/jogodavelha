import React from 'react';
import { useDispatch } from 'react-redux';
import { updateGameBoardSuccess } from '../../store/modules/round/actions';
import { Container } from './styles';

export default function Box({ children, index, cor }) {
  const dispatch = useDispatch()

  function handleClick(index){
    console.log("Cor Box => ", cor)
    dispatch(updateGameBoardSuccess(index))
  }

  return (
    <Container cor={cor}>
      <button type="button" onClick={() => handleClick(index)} > {children} </button>
    </Container>
  );
}
