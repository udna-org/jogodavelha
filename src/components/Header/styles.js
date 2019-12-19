import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 10px;

  h1 {
    color: ${props => props.tema === false ? '#373c49' : '#e5e5e5'  };

    font-size: 40px;
    /** color: #e4e4e5 */
  }
`;
