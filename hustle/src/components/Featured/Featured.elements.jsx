import styled from "styled-components"
import { Container } from "../../globalStyles";

export const Feature = styled.div`
  color: Black;
  background-color: #f8f8f8;
  margin-top: 5000px
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 4.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 920px) {
    margin-top: 3.5rem;
  }
`;

export const Post = styled.div`
display: flex;
flex-direction: column;
gap: 0.2rem;
padding-left: 3px;
padding-right: 30px;

`;

export const FeaturedContainer = styled(Container)`
display: flex;
justify-content: space-around;


@media (max-width: 920px) {
  flex-direction: column;
  gap: 3rem;
}

${Container}

`;

export const FeaturedContainerLeft = styled.div`
font-size: 1.2rem;
flex: 2;
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const FeaturedLeftTop = styled.h2`
font-size: 1.2rem;
padding-bottom: 10px;
text-decoration: underline;
width: 100%;
`;

export const FeaturedContainerRight = styled.div`
font-size: 0.8rem;
display: flex;
flex-direction: column;
box-shadow: -2px 0px 0px rgba(0, 0, 0, 0.5);
flex: 1;
padding-left: 1rem;
gap: 1rem;
`;

export const FeaturedRightTop = styled.h2`
font-size: 1.2rem;
padding-bottom: 10px;
text-decoration: underline;
width: 100%;

`;

export const FeaturedRightTitle= styled.h2`
font-size: 1.2rem;
width: 100%;

@media (max-width: 920px) {
  font-size: 1rem;
}
`;

export const FeaturedRightMiddle = styled.p`
font-size: 1rem;
padding-bottom: 10px;

@media (max-width: 920px) {
  font-size: 0.8rem;
}
`;

export const FeaturedRightBottom = styled.div`
width: 100%;
display: flex;

`;

export const FeaturedRightImg = styled.img`
height: 100%;
width: 100%;
border: 5px solid #000000;
`