import styled from "styled-components";

import miniAvatar from "../../assets/profileIcon.png";

export const PositionBox = styled.div`
  max-width: ${props => props.width || "290px"};
  width: 100%;
  height: 36px;
  margin: ${props => props.margin || "0 auto 30px"};
  background: rgba(54, 73, 95, 0.35);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    max-width: ${props => props.tabWidth || "290px"};
  }
  @media (max-width: 320px) {
    max-width: ${props => props.mobWidth || "290px"};
    margin: ${props => props.mobMargin || "0 auto 20px"};
  }
`

export const PositionImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 6px;
  margin-right: 10px;
`

export const PositionWhere = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  white-space: nowrap;
`

export const PositionGroup = styled(PositionWhere)`
  font-size: 14px;
  line-height: 16px;
  margin-left: 4px;
  color: #3E64FF;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Position = (props) => {
    return (
      <PositionBox {...props}>
        <PositionImage src={miniAvatar}/>
        <PositionWhere>
          Солист в
        </PositionWhere>
        <PositionGroup>
          System of a Down
        </PositionGroup>
      </PositionBox>
    )
}