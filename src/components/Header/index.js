import React from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux';
import Button from '../../components/Slider';

import logo from '../../assets/image.svg'
import light from '../../assets/claraimage.svg'

export default function Header() {
  const tema = useSelector(state => state.theme.cor)

  return (
    <Container tema={tema}>
      <img src={tema ? logo : light} alt="Jogo da Velha"/>
    
      <Button tema={tema}/>
    </Container>
  );
}
//   <h1> Jogo da Velha </h1>