import { InputBox } from "./AddConcertPopup.styled";
import {Button} from "../../../../components/Button";
import {PopupWrapper} from "../../../../components/PopupWrapper";
import {Title} from "../../../../components/Title";
import {Input} from "../../../../components/Input";

export const AddConcertPopup = ({closePopup}) => {
  return (
    <PopupWrapper
      onClick={closePopup}
      width={"430px"}
      tabWidth={"462px"}
      tabPadding={"40px 50px"}
    >
      <Title>
        Добавить концерт
      </Title>
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        type="text"
        placeholder="Адрес"/>
      <InputBox>
        <Input
          width={"235px"}
          tabWidth={"227px"}
          mobWidth={"141px"}
          type="text"
          placeholder="Место"/>
        <Input
          width={"120px"}
          tabWidth={"120px"}
          mobWidth={"104px"}
          type="text"
          placeholder="Дата"/>
      </InputBox>
      <Button mobWidth="190px">
        Добавить
      </Button>
    </PopupWrapper>
  )
}