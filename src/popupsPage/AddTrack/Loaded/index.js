import {Button} from "../../../components/Button";
import {PopupWrapper} from "../../../components/PopupWrapper";
import {Title} from "../../../components/Title";

export const Loaded = ({onClose}) => {
  return (
    <PopupWrapper
      display={"none"}
      width={"370px"}
      tabWidth={"462px"}
    >
      <Title>
        Трек успешно загружен !
      </Title>
      <Button onClick={onClose} tabWidth={"216px"} mobWidth={"190px"}>Ок</Button>
    </PopupWrapper>
  )
}