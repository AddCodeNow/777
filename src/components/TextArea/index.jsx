import styled from "styled-components";

const TextAreaStyled = styled.textarea`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "118px"};
  background: ${({theme}) => theme.inputBg};
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  outline: none;
  font-size: 15px;
  line-height: 18px;
  color: ${({theme}) => theme.inputColor};
  padding: 14px;
  resize: none;
  margin: ${props => props.margin || "0 0 20px 0"};
  &::placeholder {
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: ${({theme}) => theme.placeHolder};
  }
  @media (max-width: 768px) {
    margin-bottom: ${props => props.tabMargin || "0 0 20px 0"};
  }
  @media (max-width: 320px) {
    margin-bottom: ${props => props.mobMargin || "0 0 20px 0"};
  }
`

export const TextArea = ({theme, ...props}) => {
  return <TextAreaStyled {...props}/>
}