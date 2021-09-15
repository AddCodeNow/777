import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${props => props.marginBot || "15px"};
`

export const AddBtn = styled.div`
  width: 46px;
  height: 46px;
  background: rgba(54, 73, 95, 0.35);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const RemoveBtn = styled(AddBtn)`
  background: #3E64FF;
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
`

export const DownLoadBtn = styled.button`
  width: 100%;
  height: 47px;
  background: rgba(255,255,255, 0.05);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 18px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  cursor: pointer;
`

export const CheckBoxInner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const CheckBoxText = styled.p`
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  margin-left: 10px;
`