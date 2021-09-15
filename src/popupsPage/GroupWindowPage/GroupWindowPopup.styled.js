import country from '../../assets/img/country.png';
import styled from "styled-components";

export const AdminEditBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 15px;
  right: 60px;
  @media (max-width: 320px) {
    right: 15px;
    justify-content: space-between;
    max-width: 260px;
    width: 100%;
    position: relative;
    top: 0px;
    margin-bottom: 15px;
    left: 15px;
  }
`

export const AddAdminButton = styled.button`
  background: rgba(54, 73, 95, 0.3);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  border: none;
  cursor: pointer;
  width: 140px;
  height: 36px;
  @media (max-width: 320px) {
    width: 209px;
  }
`

export const EditInfoBand = styled(AddAdminButton)`
  padding: 0;
  max-width: 36px;
  height: 36px;
  flex: ${props => props.flex || "none"};
  margin-left: ${props => props.marginLeft || "15px"};
`

export const EditInfoTicked = styled(AddAdminButton)`
  padding: 0;
  max-width: 40px;
  height: 40px;
  flex: ${props => props.flex || "none"};
  margin-left: ${props => props.marginLeft || "15px"};
  @media (max-width: 320px) {
    max-width: 100%;
    width: 100%;
    flex: none;
    margin: 0 auto;
    img {
      display: none;
    }
  }
`

export const Info = styled.div `
  padding: 30px 30px 0 30px;
  display: block;
  margin-bottom: 30px;
  @media (max-width: 320px) {
    padding: 0 15px 0 15px;
    margin-bottom: 15px;
  }
`
export const InfoImgBox = styled.div`
  position: relative;
`

export const InfoImg = styled.img`
  width: 270px;
  height: 251px;
  object-fit: cover;
  margin-right: 30px;
  float: left;
  border-radius: 10px;
  position: relative;
  @media (max-width: 768px) {
    width: 196px;
    height: 180px;
    margin-bottom: 1px;
  }
  @media (max-width: 320px) {
    width: 260px;
    height: 230px;
    margin: 0;
  }
`

export const InfoBand = styled.div `
  display: block;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`

export const InfoName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  padding-left: 36px;
  position: relative;
  padding-top: 8px;
  margin-bottom: 13px;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    top: 5px;
    left: 0;
    background-image: url(${country});
  }
  @media (max-width: 320px) {
    padding-top: 15px;
    &::after {
      top: 12px;
    }
  }
`

export const InfoText = styled.p `
  max-width: 100%;
  font-weight: 300;
  font-size: 14px;
  line-height: 23px;
  color: #A7ABB1;
`

export const SliderInner = styled.div`
  width: 100%;
  height: 160px;
  background: rgba(54, 73, 95, 0.2);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  margin-bottom: 30px;
  position: relative;
`

export const SliderAddProduct = styled.div`
  background: rgba(54, 73, 95, 1);
  border: 1px dashed rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  border-radius: 10px;
  width: 120px;
  height: 120px;
  position: absolute;
  left: 49px;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
  cursor: pointer;
`

export const SliderAddProductText = styled.p`
  font-size: 13px;
  line-height: 18px;
  color: #fff;
  margin-top: 7px;
`

export const Inner = styled.div`
  position: relative;
`

export const AddConcertWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 30px;
  &:last-child {
    position: relative;
    margin-bottom: 60px;
    &::after {
      content: "";
      position: absolute;
      width: 770px;
      height: 1px;
      background-color: rgba(255,255,255, 0.1);
      left: 30px;
      bottom: -30px;
    }
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 320px) {
    padding: 0 15px;
  }
`

export const AddConcertIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255, 0.05);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`



