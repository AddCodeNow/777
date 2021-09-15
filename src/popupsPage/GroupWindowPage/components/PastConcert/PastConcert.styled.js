import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  max-width: 647px;
  justify-content: space-between;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
  @media (max-width: 320px) {
    flex-wrap: wrap;
    padding: 0 15px;
    margin-bottom: 25px;
    &:last-child {
      margin-bottom: 20px;
    }
  }
`

export const Title = styled.p`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-bottom: 20px;
  color: #FFFFFF;
`

export const Date = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  @media (max-width: 320px) {
    order: -2;
  }
`

export const ClubInfo = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  opacity: 0.6;
  @media (max-width: 320px) {
    order: -1;
    opacity: 1;
  }
`

export const AddressInfo = styled(ClubInfo)`
  @media (max-width: 320px) {
    margin-top: 15px;
    opacity: 0.6; 
  }
`