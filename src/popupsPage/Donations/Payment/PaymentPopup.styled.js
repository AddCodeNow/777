import styled from "styled-components";

export const CardItem = styled.div`
  position: relative;
  width: 430px;
  height: 260px;
  background: #2D3C4F;
  border-radius: 6px;
  padding: 40px 30px 38px;
  margin-bottom: 70px;
  z-index: 2;
  @media (max-width: 320px) {
    width: 250px;
    height: 271px;
    padding: 20px;
    margin: 0;
  }
`

export const CardItemTitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  margin-bottom: 9px;
  display: ${props => props.display || "block"};
  @media (max-width: 320px) {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 5px;
  }
`

export const CardItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`

export const CardItemBox = styled.div`
  margin-bottom: 32px;
  @media (max-width: 320px) {
    width: 100%;
    margin-bottom: 15px;
  }
`

export const InputCard = styled.input`
  width: 100%;
  height: 48px;
  background: rgba(255,255,255, 0.05);
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  border: none;
  outline: none;
  padding: 14px;
  color: rgba(255,255,255, 0.5);
  @media (max-width: 320px) {
    font-size: 17px;
    line-height: 20px;
  }
`

export const InputName = styled(InputCard)`
  width: 200px;
  margin-bottom: 0;
  font-size: 15px;
  line-height: 18px;
  @media (max-width: 320px) {
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const InputYear = styled(InputName)`
  width: 140px;
  margin-bottom: 0;
  text-transform: uppercase;
  @media (max-width: 320px) {
    width: 100%;
  }
`

export const InputCVC = styled(InputCard)`
  width: 140px;
  margin-bottom: 6px;
  font-size: 15px;
  line-height: 18px;
  padding: 16px 40px 9px;
  letter-spacing: 0.4em;
  font-size: 20px;
  line-height: 23px;
  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 21px;
    padding: 16px 43px 11px;
  }
`

export const CardItemCVCBox = styled(CardItemBox)`
  position: absolute;
  bottom: 26px;
  right: 30px;
  height: fit-content;
  margin: 0;
  @media (max-width: 320px) {
    position: relative;
    left: 0;
    max-width: 140px;
    margin: 0 auto;
    bottom: 20px;
  }
`

export const CardItemCVC = styled(CardItem)`
  background: rgba(54, 73, 95, 0.3);
  padding: 0;
  margin-bottom: 0;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  bottom: 127px;
  right: 70px;
  z-index: 1;
  @media (max-width: 768px) {
    right: 39px;
  }
  @media (max-width: 320px) {
    position: relative;
    width: 250px;
    height: 260px;
    right: 20px;
    left: 0;
    display: flex;
    flex-direction: column;
    bottom: 0;
    margin: -126px 0 20px;
  }
`

export const CardItemCVCLine = styled.div`
  width: 100%;
  height: 60px;
  background: rgba(255,255,255, 0.05);
  margin-bottom: 32px;
  position: absolute;
  top: 25px;
  right: 0;
  @media (max-width: 320px) {
    display: none;
  }
`

export const CardItemCVCDescription = styled.p`
  max-width: 140px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: rgba(255,255,255, 0.5);
`

