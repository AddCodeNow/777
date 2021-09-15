import styled from "styled-components";

export const Text = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: ${({theme}) => theme.colorText};
  text-align: center;
  @media(max-width: 320px) {
    font-size: 18px;
    line-height: 21px;
  }
`