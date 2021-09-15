import styled from "styled-components";

const ButtonStyle = styled.button`
  background: ${({theme}) => theme.buttonBg};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || "170px"};
  height: ${props => props.height || "47px"};
  margin: ${props => props.margin || "0 auto"};
  color: #fff;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  @media (max-width: 768px) {
    width: ${props => props.tabWidth || "100%"};
    margin: ${props => props.tabMargin || "0 auto"};
  }
  @media (max-width: 320px) {
    width: ${props => props.mobWidth || "100%"};
    margin: ${props => props.mobMargin || "0 auto"};
  }
`

export const Button = ({theme, ...props}) => {
  return (
    <ButtonStyle {...props}/>
  )
}