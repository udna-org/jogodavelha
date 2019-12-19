import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    height: 100px;
    width: 100px;
    background: ${props => (props.cor ? '#f715c1': '#373c49')}; 
   
    :only-child {
      color: ${props => (props.cor ? 'blue' : 'red')};
      font-size: 26px;
      font-weight: bold;
    }
  }
`;
