import styled from "styled-components";

export const AddPhoto = styled.div`
  max-width: 120px;
  margin: 0 auto 40px;
  height: 120px;
  background: rgba(54, 73, 95, 0.3); 
  border: 1px dashed rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const AddPhotoText = styled.p`
  max-width: 60px;
  font-size: 13px;
  line-height: 18px;
  color: #FFFFFF;
  margin-top: 10px;
  text-align: center;
`

export const Invisible = styled.div`
  background: #2C3B4D;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 96px;
  right: 30px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  @media (max-width: 768px) {
    right: 50px;
  }
  @media (max-width: 320px) {
    right: 15px;
    top: 86px;
  }
`

export const InputName = styled.input`
  width: 100%;
  height: 46px;
  background: rgba(54, 73, 95, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  font-size: 15px;
  line-height: 18px;
  color: rgba(255,255,255, 0.5);
  padding: 14px;
  margin-bottom: 15px;
  outline: none;
  @media (max-width: 320px) {
    margin-bottom: 10px;
  }
`

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 320px) {
    margin-bottom: 30px;
  }
`

export const InputPrice = styled(InputName)`
  width: 230px;
  margin-bottom: 0;
  @media (max-width: 768px) {
    width: 196px;
  }
  @media (max-width: 320px) {
    width: 125px;
  }
`

export const InputNumber = styled(InputName)`
  width: 125px;
  margin-bottom: 0;
  @media (max-width: 768px) {
    width: 151px;
  }
  @media (max-width: 320px) {
    width: 125px;
  }
`