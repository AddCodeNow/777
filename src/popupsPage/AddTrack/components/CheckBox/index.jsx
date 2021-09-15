import React, {useState} from 'react';
import styled from "styled-components";

import check from './assets/check.svg'

const Label = styled.label`
  display: flex;
  margin: ${props => props.margin || "0 0 20px 0"};
`

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  height: 20px;
  width: 20px;
  background: rgba(54, 73, 95, 0.35);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  outline: none;
  position: relative;

  &:checked {
    background-image: url(${check});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center center;
  }
`

export const CheckBox = ({onChange, checked = false, margin}) => {
  const [check, setCheck] = useState(checked);
  const handleClick = (event) => {
    setCheck(event.target.checked);
    onChange && onChange(event.target.checked);
  }
  return (
    <>
      <Label margin={margin}>
        <Input
          checked={check}
          type="checkbox"
          className="option-input checkbox"
          onChange={handleClick}
        />
      </Label>
    </>
  )
}