import styled from "styled-components";

const ToggleDarkOrLightStyles = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 20px;
  right: 40px;
  background: #222E3C;
  cursor: pointer;
  z-index: 999;
`

export const ToggleDarkOrLight = ({children, toggleTheme}) => {
  return (
    <ToggleDarkOrLightStyles onClick={toggleTheme}>
      {children}
    </ToggleDarkOrLightStyles>
  )

}