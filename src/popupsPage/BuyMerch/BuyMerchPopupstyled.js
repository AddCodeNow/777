import styled from "styled-components";

export const Image = styled.img`
  margin: 30px auto 0;
  width: 270px;
  height: 270px;
  object-fit: cover;
  @media (max-width: 320px) {
    width: 210px;
    height: 210px;
    margin: 20px auto 0;
  }
`

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 15px;
  }
`

export const ProductPrice = styled(ProductName)`
  margin-bottom: 40px;
  @media (max-width: 320px) {
    margin-bottom: 30px;
  }
`
