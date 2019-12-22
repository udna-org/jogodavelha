import React from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux';
import Button from '../../components/Slider';


export default function Header() {
  const tema = useSelector(state => state.theme.cor)

  return (
    <Container tema={tema}>
      <h1> Jogo da Velha </h1>
      <Button tema={tema}/>
    </Container>
  );
}
