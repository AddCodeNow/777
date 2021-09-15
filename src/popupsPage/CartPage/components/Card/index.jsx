import styled, {ThemeProvider} from 'styled-components';

import tShirt1 from '../../assets/t-shirt1.png'
import {CardCount} from "./components/Card.count";
import {themeDark, themeLight} from "../../../../Styled/DarkorLight";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15px 30px 15px;
`

export const CardImage = styled.img`
  margin-bottom: 10px;
  width: 170px;
  height: 170px;
  object-fit: contain;
`

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: ${({theme}) => theme.colorText};
  margin-bottom: 15px;
  max-width: 147px;
`

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${({theme}) => theme.colorText};
  margin-bottom: 25px;
`

export const Card = ({theme, ...props}) => {
  const themeMode = theme === 'light' ? themeLight : themeDark;
;
  return (
    <ThemeProvider theme={themeMode}>
      <Wrapper>
        <CardImage src={tShirt1} alt="t-shirt image"/>
        <Description {...props}>
          Футболка
          “Kindness”
        </Description>
        <Price {...props}>
          2 990 ₽
        </Price>
        <CardCount theme={theme}/>
      </Wrapper>
    </ThemeProvider>
  )
}
