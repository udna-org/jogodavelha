import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../store/modules/theme/actions'
import { Container } from './styles';

export default function Slider() {
  const color = useSelector(state => state.theme.cor)
  const dispatch = useDispatch()

  function handleColor(){
    dispatch(updateTheme(!color))
  }

  return (
    <Container>
      <button onClick={handleColor}> {color ? "ACENDE" : "APAGA"} </button>
    </Container>
  );
}
