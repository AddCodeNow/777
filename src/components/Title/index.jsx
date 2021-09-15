import styled, { ThemeProvider } from "styled-components";

import { themeDark, themeLight } from '../../Styled/DarkorLight';

const TitleStyles = styled.h6`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: ${({ theme }) => theme.colorText};
  max-width: ${props => props.width || "100%"};
  text-align: center;
  margin: ${props => props.margin || "0 auto 35px"};
  @media (max-width: 768px) {
    max-width: ${props => props.tabWidth || "100%"};
    margin: ${props => props.tabMargin || "0 auto 35px"};
  }
  @media (max-width: 320px) {
    max-width: ${props => props.mobWidth || "100%"};
    margin: ${props => props.tabMargin || "0 auto 25px"};
  }
`

export const Title = ({theme, ...props}) => {

  const themeMode = theme === 'light' ? themeLight : themeDark;
  return (
    <ThemeProvider theme={themeMode}>
      <TitleStyles {...props}/>
    </ThemeProvider>
  )
}