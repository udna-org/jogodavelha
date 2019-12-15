import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 50px;
    background: #3c4042;

    :only-child{
      color: #52e623;
      font-size: 24px;
    }
  }
`;
