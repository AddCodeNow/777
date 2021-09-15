import {Button} from "../../components/Button";
import {PopupWrapper} from "../../components/PopupWrapper";
import {Title} from "../../components/Title";
import {TextArea} from "../../components/TextArea";

export const WriteToUsPopup = ({onClick}) => {
  return (
    <PopupWrapper
      width={"430px"}
      tabWidth={"462px"}
      tabPadding={"40px 50px"}
      onClick={onClick}
    >
      <Title>
        Напишиет нам
      </Title>
      <TextArea
        height={"208px"}
        placeholder={"Сообщение..."}
      />
      <Button width={"100%"}>Отправить</Button>
    </PopupWrapper>
  )
}