import styled from "styled-components"
import { Container, Button } from "../../globalStyles";

export const Head = styled.div`
  color: Black;
  background-color: #f8f8f8;
  font-size: 1.2rem;
  margin-top: 3.8rem;

  @media (max-width: 920px) {
    margin-top: 2.5rem;
  }
 
`;


export const HeaderContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;

${Container};

@media (max-width: 920px) {
  flex-direction: column;
  gap: 20px;
}
`;

export const HeaderContainerLeft = styled.div`
font-size: 1.2rem;
`;

export const HeaderTop = styled.h2`
font-size: 2.8rem;
padding-bottom: 10px;

@media (max-width: 920px) {
  font-size: 2rem;
}
`;

export const HeaderMiddle = styled.p`
font-size: 1.2rem;
padding-bottom: 10px;

@media (max-width: 920px) {
  font-size: 1rem;
}
`;

export const HeaderBottom = styled.div`
width: 100%;
display: flex;

`;

export const HeaderBottomInput = styled.input`
width: 80%;
padding: 10px;
border-radius: 5px;

@media (max-width: 920px) {
  padding: 8px;
}
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
height: 90%;
width: 90%;
border: 5px solid #000000;

@media (max-width: 920px) {
  height: 90%;
  width: 90%;
}
`
