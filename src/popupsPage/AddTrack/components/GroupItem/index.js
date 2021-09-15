import styled from "styled-components";

export const DropDownAddGroup = styled.div`
  width: 301px;
  height: 46px;
  background: rgba(41, 55, 72, 1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 14px;
  cursor: pointer;
  font-size: 15px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.5);
  z-index: 4;
  position: relative;
`

export const GroupItem = ({children, onClick}) => {
  return (
    <DropDownAddGroup onClick={onClick} children={children}/>
  )
}