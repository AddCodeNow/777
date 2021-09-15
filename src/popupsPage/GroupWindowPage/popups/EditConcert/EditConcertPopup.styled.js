import styled from "styled-components";

export const DeleteButton = styled.button`
  width: 170px;
  height: 47px;
  padding: 0;
  background: #2D3946;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  @media (max-width: 320px) {
    width: 100%;
  }
`

export const InnerBtn = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`