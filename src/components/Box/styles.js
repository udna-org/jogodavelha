import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  disabled: props.light === true,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    height: 100px;
    width: 100px;
    background: #373c49;
    
     /*background: #3c4042;*/ 
     
    :only-child{
      color: magenta;
      font-size: 26px;
      font-weight: bold;
    }
  }
`;

/** 
    & [disabled]{
      background: #f715c1;
    } */