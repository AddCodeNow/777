import styled from "styled-components";
import TrashIcon from '../../../assets/trash.svg';
import {useState} from "react";

const Inner = styled.div`
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  width: 109px;
  height: 36px;
  background: ${({theme}) => theme.lineBg};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  margin-right: 15px;
  @media (max-width: 767px) {
    width: 120px;
  }
  @media (max-width: 320px) {
    width: 140px;
  }
`

const Minus = styled.p`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  transition: all .2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 13px;
    height: 2px;
    background: ${({theme}) => theme.countColor};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Plus = styled.p`
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 13px;
    background: ${({theme}) => theme.countColor};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    content: "";
    position: absolute;
    width: 13px;
    height: 2px;
    background: ${({theme}) => theme.countColor};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const Trash = styled.div`
  width: 36px;
  height: 36px;
  background: ${({theme}) => theme.trashBg};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Count = styled.p`
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  color: ${({theme}) => theme.countColor};
`

export const CardCount = ({theme, ...props}) => {
  const [count, setCount] = useState(1);

  const HandleClick = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <Inner>
      <Wrapper>
        <Minus
          onClick={HandleClick}
        />
        <Count>
          {count}
        </Count>
        <Plus
          onClick={() => setCount(count + 1)}
        />
      </Wrapper>
      <Trash {...props}>
        <img src={TrashIcon} alt="trash icon"/>
      </Trash>
    </Inner>
  )
}
