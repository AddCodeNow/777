import {
  AddPhoto,
  AddPhotoText,
  InputBox,
  Invisible,
} from "./AddProductPopup.styled";
import photoIcon from '../../assets/photo.svg';
import invisible from '../../assets/invisible.svg';
import {Button} from "../../../../components/Button";
import {PopupWrapper} from "../../../../components/PopupWrapper";
import {Title} from "../../../../components/Title";
import {Input} from "../../../../components/Input";

export const AddProductPopup = ({closePopup}) => {
  return (
    <PopupWrapper
      onClick={closePopup}
      width={"430px"}
      tabWidth={"462px"}
      tabPadding={"40px 50px"}
    >
      <Title>
        Добавить товар
      </Title>
      <AddPhoto>
        <img src={photoIcon} alt="icon"/>
        <AddPhotoText>
          Добавить
          фото
        </AddPhotoText>
      </AddPhoto>
      <Invisible>
        <img src={invisible} alt="icon"/>
      </Invisible>
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        type="text"
        placeholder="Название"
      />
      <InputBox>
        <Input
          width={"230px"}
          tabWidth={"196px"}
          mobWidth={"125px"}
          type="text"
          placeholder="Цена"/>
        <Input
          width={"125px"}
          tabWidth={"151px"}
          mobWidth={"125px"}
          type="text"
          placeholder="Кол-во"/>
      </InputBox>
      <Button mobWidth="190px" tabWidth="216px">
        Добавить
      </Button>
    </PopupWrapper>
  )
}