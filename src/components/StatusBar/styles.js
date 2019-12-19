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
    color: #ff2112;
    font-size: 30px;
    span {
      color: #a374e5;
      font-weight: bold;
      font-size: 30px;
    }
  }

  button {
    background:#f41142;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin-top: 35px;
  }
`;
