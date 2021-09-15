import styled from "styled-components";

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px 30px;
  margin-bottom: 30px;
  @media (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const InputTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 15px;
  color: ${({theme}) => theme.colorText};
`

export const DeliveryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.MarBot};
`

export const Payment = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${({theme}) => theme.colorText};
`

export const Sum = styled(Payment)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${({theme}) => theme.colorText};
`
