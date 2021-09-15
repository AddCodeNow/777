import styled from "styled-components";
import arrowBtn from '../../assets/arrow.svg';
import {useState} from "react";

const DropDown = styled.div`
  max-width: ${props => props.maxWidth || "307px"};
  width: 100%;
  position: relative;
  user-select: none;
  margin: ${props => props.margin || "0"};
  @media (max-width: 320px) {
    max-width: ${props => props.mobWidth || "199px"};
  }
`

const DropDownBtn = styled.div`
  height: 46px;
  background: rgba(41, 55, 72, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`

const DropDownContent = styled.div`
  position: absolute;
  width: 100%;
  top: 47px;
  left: 0;
  background: rgba(41, 55, 72, 1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0px -15px 20px -10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 14px;
  z-index: 6;
`

const DropDownItem = styled.div`
  padding: 14px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  line-height: 18px;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: rgba(41, 55, 72, 0.9);
    border-radius: 6px;
  }
`

const ArrowBtn = styled.span`
  width: 22px;
  height: 22px;
  background-color: transparent;
  background-image: url(${arrowBtn});
  display: block;
`

export const DropDownMenu = (props) => {
  const [isActive, setIsActive] = useState();
  const [selected, setSelected] = useState("Выбор Группы");
  const options = ['React', 'Vue', 'Angular'];

  return (
    <DropDown {...props}>
      <DropDownBtn onClick={() => setIsActive(!isActive)}>
        {selected}
        <ArrowBtn/>
      </DropDownBtn>
      {
        isActive && (
          <DropDownContent>
            {
              options.map(options => (
                <DropDownItem
                  onClick={() => {
                    setSelected(options)
                    setIsActive(false)
                  }}
                >
                  {options}
                </DropDownItem>
              ))
            }
          </DropDownContent>
        )
      }
    </DropDown>
  )
}