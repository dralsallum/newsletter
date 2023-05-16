import styled from "styled-components"
import { Container, Button } from "../../globalStyles";

export const Head = styled.div`
  color: Black;
  background-color: #f8f8f8;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 2.8rem;

`;


export const HeaderContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 200px;
align-items: center;

${Container}
`;

export const HeaderContainerLeft = styled.div`
font-size: 1.2rem;
`;

export const HeaderTop = styled.h2`
font-size: 2.2rem;
padding-bottom: 10px;
`;

export const HeaderMiddle = styled.p`
font-size: 1rem;
padding-bottom: 10px;
`;

export const HeaderBottom = styled.div`
width: 100%;
display: flex;

`;

export const HeaderBottomInput = styled.input`
width: 80%;
padding-left: 10px;
border-radius: 5px;
`;


export const HeaderBottomButton = styled(Button)`
width: 20%;
font-size: 0.8rem;
background-color: #000000;
padding: 10px;
`;



export const HeaderContainerRight = styled.div`
font-size: 1.2rem;
display: flex;
justify-content: center;
align-items: center;
`;

export const HeaderRightImg = styled.img`
height: 70%;
width: 70%;
border: 5px solid #000000;
`
