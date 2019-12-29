import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: auto;
  
  height: 100%;
  background: ${props => (props.theme === true ? '#091b28 ': '#e4e4e5')}; 
`;
