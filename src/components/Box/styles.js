import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #999;

  button {
    padding: 50px;
    background: #3c4042;

    :only-child{
      color: #52e623;
      font-size: 24px;
    }
  }
`;
