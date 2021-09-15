import styled from "styled-components";
import avatar from '../assets/profileAvatar.png';

export const EditAvatar = styled.div`
  max-width: 130px;
  width: 100%;
  height: 130px;
  margin: 0 auto 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(23, 33, 43, 0.8), rgba(23, 33, 43, 0.8)), url(${avatar});
`

export const ChangePhotoText = styled.p`
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  width: 66px;
  color: #FFFFFF;
`

export const PositionInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.margin || "0 0 20px 0"};
  @media (max-width: 768px) {
    margin: ${props => props.tabMargin || "0 0 20px 0"};
  }
  @media (max-width: 320px) {
    margin: ${props => props.mobMargin || "0 0 20px 0"};
  }
`

export const Add = styled.div`
  background: rgba(54, 73, 95, 0.35);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`