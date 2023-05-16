import React from 'react';
import { Head, HeaderContainer, HeaderContainerLeft, HeaderContainerRight, HeaderTop, HeaderMiddle, HeaderBottom, HeaderBottomButton, HeaderBottomInput, HeaderRightImg} from './Header.elements';
import iphone from '../../assets/iphone.png';
const Header = () => {
  return (
    <>
    <Head>
      <HeaderContainer>
        <HeaderContainerLeft>
          <HeaderTop>Get Smarter on Business <br></br> and Tech</HeaderTop>
          <HeaderMiddle>Get the 5-minute newsletter keeping 2M+ innovators in the loop.</HeaderMiddle>
          <HeaderBottom>
            <HeaderBottomInput placeholder='write your email here' ></HeaderBottomInput>
            <HeaderBottomButton>Press here</HeaderBottomButton>
          </HeaderBottom> 
          </HeaderContainerLeft> 
        <HeaderContainerRight> <HeaderRightImg src={iphone} /> </HeaderContainerRight>
      </HeaderContainer>
      </Head>
    </>
  )
}

export default Header