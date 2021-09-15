import styled from "styled-components";

const InputStyles = styled.input`
  background: ${({theme}) => theme.inputBg};
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: ${props => props.width || "100%"};
  height: 46px;
  padding: 14px;
  outline: none;
  font-size: 15px;
  line-height: 18px;
  color: ${({theme}) => theme.inputColor};
  margin: ${props => props.margin || "0"};
  &::placeholder {
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: ${({theme}) => theme.placeHolder};
  }
  @media (max-width: 768px) {
    width: ${props => props.tabWidth || "100%"};
    margin: ${props => props.tabMargin || "0"};
  }
  @media (max-width: 320px) {
    width: ${props => props.mobWidth || "100%"};
    margin: ${props => props.mobMargin || "0"};
  }
`

export const Input = ({theme, ...props}) => {
  return <InputStyles {...props}/>
}