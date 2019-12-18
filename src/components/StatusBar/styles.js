import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f5f5f5;
  padding: 10px;

  h2 {
    margin-top: 15px;
    color: magenta;
    span {
      color: #f5f5f5;
      font-weight: bold;
    }
  }

  button {
    background: #f41142;
    color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
  }
`;
