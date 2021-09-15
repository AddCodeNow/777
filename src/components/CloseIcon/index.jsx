import styled from "styled-components";

const CloseBtnStyled = styled.div`
  width: 14px;
  height: 14px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
  top: ${props => props.top || "20px"};
  right: ${props => props.right || "20px"};
  display: ${props => props.display || "block"};
  svg {
    width: 14px;
    height: 14px;
    path {
      stroke: ${({theme}) => theme.closeBtnBg};
    }
  }
  @media (max-width: 320px) {
    svg {
      path {
        stroke: ${props => props.stroke || "#fff"};
      }
    }
    top: ${props => props.mobTop || "20px"};
    right: ${props => props.mobRight || "20px"};
    display: ${props => props.mobDisplay || "block"};
  }
`

export const CloseBtn = ({theme, ...props}) => {

  return (
    <CloseBtnStyled {...props}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L15 15" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 1L1 15" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </CloseBtnStyled>
  )
}

