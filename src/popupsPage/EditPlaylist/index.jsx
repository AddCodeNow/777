import {
  CheckBoxInner,
  CheckBoxText,
  InnerButtons, TrashBox
} from "./EditPlaylistPopup.styled";

import {CheckBox} from "../AddTrack/components/CheckBox";
import {Button} from "../../components/Button";

import trash from './assets/trash.svg';
import {PopupWrapper} from "../../components/PopupWrapper";
import {Title} from "../../components/Title";
import {Input} from "../../components/Input";

export const EditPlaylistPopup = ({onClick}) => {
  return (
    <PopupWrapper
      onClick={onClick}
      width={"430px"}
      tabWidth={"462px"}
      tabPadding={"40px 50px"}
    >
      <Title mobWidth={"147px"}>
        Редатировать плейлист
      </Title>
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        placeholder={"Название"}
      />
      <CheckBoxInner>
        <CheckBox margin={"0 0 0 0"}/>
        <CheckBoxText>Доступен всем</CheckBoxText>
      </CheckBoxInner>
      <InnerButtons>
        <Button
          margin={"0"}
          tabMargin={"0"}
          mobMargin={"0"}
          width={"293px"}
          tabWidth={"293px"}
          mobWidth={"198px"}>
          Сохранить
        </Button>
        <TrashBox>
          <img src={trash} alt="trash icon"/>
        </TrashBox>
      </InnerButtons>
    </PopupWrapper>
  )
}