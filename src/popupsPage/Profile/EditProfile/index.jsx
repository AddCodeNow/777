import {
  Add,
  ChangePhotoText,
  EditAvatar,
  PositionInner
} from "./EditProfilePopup.styled";
import {Position} from "../components/PositionBox";

import cameraIcon from '../assets/photo-camera.svg';
import add from '../assets/add.svg';
import {DropDownMenu} from "../../AddTrack/components/DropDown";
import {Button} from "../../../components/Button";
import {useState} from "react";
import {PopupWrapper} from "../../../components/PopupWrapper";
import {Input} from "../../../components/Input";

export const EditProfilePopup = ({onClose}) => {

  const [addGroup, setAddGroup] = useState(false);

  const handleAddGroup = () => {
    setAddGroup(!addGroup)
  }

  return (
    <PopupWrapper
      width={"370px"}
      tabWidth={"462px"}
      tabPadding={"40px 50px"}
      onClick={onClose}
    >
      <EditAvatar>
        <img src={cameraIcon} alt="icon"/>
        <ChangePhotoText>
          Изменить фото
        </ChangePhotoText>
      </EditAvatar>
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        placeholder={"Id1556465"}
      />
      <Input
        margin={"0 0 40px 0"}
        tabMargin={"0 0 40px 0"}
        mobMargin={"0 0 40px 0"}
        placeholder={"Серж Танкян"}
      />
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        placeholder={"TankianSOAD@gmail.com"}
      />
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        placeholder={"21.08.1967"}
      />
      <Input
        margin={"0"}
        tabMargin={"0"}
        mobMargin={"0"}
        placeholder={"Лос-Анджелес"}/>
      {
        addGroup ? (
          <>
            <PositionInner
              margin={"40px 0 20px"}
              tabMargin={"40px 0 20px"}
              mobMargin={"30px 0 20px"}
            >
              <Position
                width={"259px"}
                tabWidth={"311px"}
                mobWidth={"214px"}
                margin={"0"}
                mobMargin={"0"}/>
              <Add>
                <img src={add} alt="plus"/>
              </Add>
            </PositionInner>
            <DropDownMenu
              maxWidth={"100%"}
              mobWidth={"100%"}
              margin={"0 0 15px 0"}
            />
            <Input
              margin={"0 0 40px 0"}
              tabMargin={"0 0 40px 0"}
              mobMargin={"0 0 30px 0"}
              placeholder={"Должность/роль"}
            />
          </>
        ) : (
          <Button
            onClick={handleAddGroup}
            width={"152px"}
            tabWidth={"152px"}
            mobWidth={"152px"}
            margin={"20px auto 45px"}
            height={"40px"}
            tabMargin={"30px auto 40px"}
            mobMargin={"15px auto 40px"}
          >
            Добавить группу
          </Button>
        )
      }
      <Button width={"100%"} tabWidth={"214px"} mobWidth={"100%"}>
        Сохранить
      </Button>
    </PopupWrapper>
  )
}