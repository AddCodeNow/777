import styled from "styled-components";


export const Avatar = styled.img`
  max-width: 130px;
  margin: 0 auto 20px;
  width: 100%;
  height: 130px;
  object-fit: contain;
`

export const IdNumber = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 5px;
`

export const NameArtist = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #A7ABB1;
  margin-bottom: 20px;
  text-align: center;
`



export const InfoBox = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
`

export const InfoInnerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 30px;
  }
`

export const InfoEmail = styled.p`
  color: #A7ABB1;
  margin-right: 4px;
`

export const InfoEmailText = styled.span`
  
`

export const InfoDate = styled.p`
  color: #A7ABB1;
  margin-right: 4px;
`

export const InfoDateText = styled(InfoEmailText)`
  
`

export const InfoCity = styled.p`
  color: #A7ABB1;
  margin-right: 4px;
`

export const InfoCityText = styled(InfoEmailText)`
 
`

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BtnConfig = styled.button`
  border: none;
  width: 140px;
  height: 47px;
  background: rgba(255,255,255, 0.05);
  border-radius: 6px;
  cursor: pointer;
  margin-left: 30px;
  color: #fff;
  @media (max-width: 768px) {
    width: 146px;
  }
  @media (max-width: 320px) {
    width: 120px;
    margin-left: 20px;
  }
`
