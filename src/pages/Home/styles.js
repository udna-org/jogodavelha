import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${props => (props.theme === true ? '#091b28 ': '#e4e4e5')}; 
`;
