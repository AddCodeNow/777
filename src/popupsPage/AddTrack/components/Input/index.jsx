import styled from "styled-components";

export const Input = styled.input`
  width: ${props => props.width || "100%"};
  height: 46px;
  background: rgba(54, 73, 95, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 14px;
  font-size: 15px;
  line-height: 18px;
  color: rgba(255,255,255, 0.5);
  outline: none;
  z-index: 5;
  margin-bottom: ${props => props.marginBot || "0"};
  @media (max-width: 768px) {
    width: ${props => props.tabWidth || "100%"};
  }
  @media (max-width: 320px) {
    width: ${props => props.mobWidth || "100%"};
  }
`

export const InputItem = (props) => {
  return (
    <Input {...props}/>
  )
}