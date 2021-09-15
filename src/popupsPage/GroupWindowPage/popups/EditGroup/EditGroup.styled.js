import styled from "styled-components";

export const AddPhotoBlock = styled.div`
  max-width: 120px;
  height: 120px;
  background: rgba(54, 73, 95, 0.3);
  border: 1px dashed rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;
  cursor: pointer;
  @media(max-width: 320px) {
    margin-bottom: 20px;
  }
`

export const AddPhotoText = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #FFFFFF;
  max-width: 60px;
  text-align: center;
  margin-top: 10px;
`




