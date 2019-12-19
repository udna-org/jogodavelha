import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${props => (props.theme === true ? '#373c49 ': '#e4e4e5')}; 
`;
