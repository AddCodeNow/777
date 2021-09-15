import styled, {ThemeProvider} from "styled-components";
import {CloseBtn} from "../CloseIcon";

import {themeDark, themeLight} from '../../Styled/DarkorLight';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({theme}) => theme.wrapBg};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

export const Popup = styled.div`
  width: ${props => props.width || "830px"};
  background: ${({theme}) => theme.popupBg};
  border-radius: 10px;
  padding: ${props => props.padding || "40px 30px"};
  z-index: 2;
  overflow: auto;
  position: relative;
  height: ${props => props.height || "fit-content"};

  &::-webkit-scrollbar {
    width: 0;
    background: rgba(255, 255, 255, 0.0);
  }

  @media (max-width: 768px) {
    width: ${props => props.tabWidth || "522px"};
    padding: ${props => props.tabPadding || "40px 30px"};
    height: ${props => props.tabHeight || "fit-content"};
  }
  @media (max-width: 320px) {
    width: ${props => props.mobWidth || "290px"};
    padding: ${props => props.mobPadding || "30px 15px"};
    height: ${props => props.mobHeight || "fit-content"};
  }
`
export const PopupWrapper = ({children, onClick, theme, ...props}) => {
  const themeMode = theme === 'light' ? themeLight : themeDark;
  return (
    <ThemeProvider theme={themeMode}>
      <Wrapper {...props}>
        <Popup {...props}>
          <CloseBtn {...props} onClick={onClick} theme={theme}/>
          {children}
        </Popup>
      </Wrapper>
    </ThemeProvider>
  )
}