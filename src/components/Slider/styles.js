import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding-left: 15px;

  button {
    padding: 9px;
    color: ${props => props.tema === false ?  '#e4e4e5' : '#373c49'};

    font-weight: bold;
    background: ${props => props.tema === false ? '#373c49' : '#e4e4e5'};

    border-radius: 15px;
  }
`;
