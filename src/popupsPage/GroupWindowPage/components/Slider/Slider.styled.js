import styled from "styled-components";

export const SliderItem = styled.div`
  position: relative;
`

export const TrashItemAdmin = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 36px;
  background: #293748;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    background: #3E64FF;
  }
`