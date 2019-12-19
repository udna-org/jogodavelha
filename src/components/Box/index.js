import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGameBoardSuccess } from '../../store/modules/round/actions';
import { Container } from './styles';

export default function Box({ children, index, cor }) {
  const tema = useSelector(state => state.theme.cor)
  const dispatch = useDispatch()

  function handleClick(index){
    console.log("Cor Box => ", cor)
    dispatch(updateGameBoardSuccess(index))
  }

  return (
    <Container cor={cor} tema={tema}>
      <button type="button" onClick={() => handleClick(index)} > {children} </button>
    </Container>
  );
}
