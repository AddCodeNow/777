import styled from "styled-components";

export const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: rgba(255, 255, 255, 0.0);
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 30px;
`

export const Arrange = styled.div`
  width: 100%;
  height: 70px;
  background: ${({theme}) => theme.lineBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;
  bottom: 37px;
  left: 0;
  padding: 0 30px;
  @media (max-width: 400px) {
    flex-direction: column;
    padding: 15px 0;
    height: 110px;
  }
`

export const ProductAndPrice = styled.div`
  display: flex;
  align-items: center;
`

export const Product = styled.p`
  font-size: 14px;
  line-height: 16px;
  display: flex;
  color: ${({theme}) => theme.colorText};
  margin-right: 10px;
`

export const Price = styled.p`
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  color: ${({theme}) => theme.colorText};
`

