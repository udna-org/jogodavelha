import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  color: #ff3324;
  
  h1 {
    color: #52e623;
    font-size: 24px;
  }
`;

export const Tabuleiro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  margin-top: 20px; 
`
