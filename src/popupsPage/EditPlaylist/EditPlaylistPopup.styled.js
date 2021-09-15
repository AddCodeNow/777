import styled from "styled-components";

export const CheckBoxInner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 320px) {
    margin-bottom: 30px;
  }
`

export const CheckBoxText = styled.p`
  margin-left: 10px;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
`

export const InnerButtons = styled.div`
  display: flex;
  alignSelf: center;
  justify-content: space-between;
`

export const TrashBox = styled.div`
  width: 47px;
  height: 47px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`