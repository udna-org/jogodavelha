import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e4e4e5;
  padding: 10px;

  h2 {
    margin-top: 25px;
    color: #e4e4e5;
    font-size: 30px;
    span {
      color: greenyellow;
      font-weight: bold;
      font-size: 30px;
    }
  }

  button {
    background:#f41142;
    color: #e4e4e5;
    padding: 10px;
    border-radius: 5px;
    margin-top: 35px;
  }
`;

//  #f41142