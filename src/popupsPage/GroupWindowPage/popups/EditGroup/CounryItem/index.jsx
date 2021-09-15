import styled from "styled-components";
import flag from '../assets/flags/1.png';
import Arrow from '../assets/arrow.svg';

export const CountrySelection = styled.div`
  background: rgb(54, 73, 95, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  height: 46px;
  width: 100%;
  margin-bottom: 30px;
  @media (max-width: 320px) {
    margin-bottom: 25px;
  }
`
export const CountrySelectionItem = styled.div`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  display: flex;
  align-items: center;
`

export const CountrySelectionFlag = styled.div`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 5px 0px 0px 5px;
  width: 55px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`

export const CountrySelectionTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.5);
  flex: 1;
`

export const CountrySelectionBtn = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 12px;
  cursor: pointer;
`


export const CountryItem = ({children, onClick}) => {
  return (
    <CountrySelection>
      <CountrySelectionItem>
        <CountrySelectionFlag>
          <img src={flag} alt="icon"/>
        </CountrySelectionFlag>
        <CountrySelectionTitle>
          Россия
        </CountrySelectionTitle>
        <CountrySelectionBtn onClick={onClick}>
          <img src={Arrow} alt="arrow"/>
        </CountrySelectionBtn>
      </CountrySelectionItem>
      {children}
    </CountrySelection>
  )
}