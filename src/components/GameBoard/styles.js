import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  
  h1 {
    color: ${props => props.tema === false ? '#f41142' : '#f41142'};
    font-size: 32px;
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
