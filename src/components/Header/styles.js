import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 10px;
  margin-left: 100px;

  h1 {
    color: ${props => props.tema === false ? '#373c49' : '#e4e4e5'  };
    font-size: 40px;
  }

  img {
    height: 100px;
    border-radius: 5px;
    margin-right: 20px;
  }
`;
