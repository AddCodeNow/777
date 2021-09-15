import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 15px;

  &:last-child {
    position: relative;
    margin-bottom: 60px;

    &::after {
      content: "";
      position: absolute;
      width: 770px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.1);
      left: 30px;
      bottom: -30px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 320px) {
    padding: 0 15px;
    &:last-child {
      &::after {
        width: 260px;
        left: 15px;
      }
    }
  }
`
export const IconMapBox = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  @media (max-width: 320px) {
    margin-right: 10px;
    order: -4;
  }
`
export const IconMap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(54, 73, 95, 0.65);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Date = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  margin-right: 44px;
  @media (max-width: 320px) {
    order: -2;
    margin-right: 0;
  }
`

export const ClubInfo = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  opacity: 0.6;
  margin-right: 20px;
  @media (max-width: 320px) {
    order: -3;
    margin-right: 49px;
    opacity: 1;
  }
`

export const AddressInfo = styled(ClubInfo)`
  margin-right: 81px;
  @media (max-width: 768px) {
    margin-right: 46px;
  }
  @media (max-width: 320px) {
    order: -2;
    margin: 15px 0 15px 0;
    opacity: 0.6;
  }
`

export const Ticked = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  margin-left: 3px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: inline-block;
  }
`

export const EditInfoBandText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`
