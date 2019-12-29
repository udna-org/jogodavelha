import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    height: 100px;
    width: 100px;
    background: ${props => props.tema === true ? '#e5e5e5'  : '#091b28'};
   
    :only-child {
      color: ${props => (props.tema ? '#390047' : '#e7a2f8')};
      font-size: 26px;
      font-weight: bold;
    }
  }
`;
