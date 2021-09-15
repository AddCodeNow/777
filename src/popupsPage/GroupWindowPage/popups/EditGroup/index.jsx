import {
  AddPhotoBlock,
  AddPhotoText,
} from "./EditGroup.styled";
import photoIcon from '../../../../assets/img/photo-icon.svg';
import {CountryItem} from "./CounryItem";
import {PopupWrapper} from "../../../../components/PopupWrapper";
import {Title} from "../../../../components/Title";
import {Button} from "../../../../components/Button";
import {TextArea} from "../../../../components/TextArea";
import {Input} from "../../../../components/Input";

export const EditGroupPopup = ({closePopup}) => {
  return (
    <PopupWrapper
      onClick={closePopup}
      width={"430px"}
      tabWidth={"462"}
    >
      <Title
        mobWidth={"160px"}
      >
        Редактировать группу
      </Title>
      <AddPhotoBlock>
        <img src={photoIcon} alt="add icon"/>
        <AddPhotoText>
          Добавить
          фото
        </AddPhotoText>
      </AddPhotoBlock>
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        type="text"
        placeholder="Название группы"
      />
      <CountryItem />
      <TextArea placeholder="Добавьте описание..."/>
      <Button>
        Добавить
      </Button>
    </PopupWrapper>
  )
}
