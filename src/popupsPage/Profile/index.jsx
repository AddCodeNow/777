import {
  BtnConfig, ButtonBox,
  IdNumber, InfoBox, InfoCity, InfoCityText, InfoDate, InfoDateText, InfoEmail, InfoEmailText, InfoInnerItem,
  NameArtist,
} from "./ProfilePopup.styled";
import {Position} from "./components/PositionBox";

import {Button} from "../../components/Button";
import {useState} from "react";
import {EditProfilePopup} from "./EditProfile";
import {PopupWrapper} from "../../components/PopupWrapper";

export const ProfilePopup = ({onClick}) => {

const [openEditProfile, setOpenEditProfile] = useState(false);
  const handleOpenEditProfile = () => {
    setOpenEditProfile(!openEditProfile);
  }

  return (
    <>
      <PopupWrapper onClick={onClick}>
        <IdNumber>
          Id1556465
        </IdNumber>
        <NameArtist>
          Серж Танкян
        </NameArtist>
        <Position/>
        <InfoBox>
          <InfoInnerItem>
            <InfoEmail>Email:</InfoEmail>
            <InfoEmailText>TankianSOAD@gmail.com</InfoEmailText>
          </InfoInnerItem>
          <InfoInnerItem>
            <InfoDate>Дата рождения:</InfoDate>
            <InfoDateText>21.08.1967</InfoDateText>
          </InfoInnerItem>
          <InfoInnerItem>
            <InfoCity>Город:</InfoCity>
            <InfoCityText>Лос-Анджелес</InfoCityText>
          </InfoInnerItem>
        </InfoBox>
        <ButtonBox>
          <Button margin={"0 0 0 0"} width={"140px"} tabWidth={"146px"} mobWidth={"120px"}>
            Выйти
          </Button>
          <BtnConfig onClick={handleOpenEditProfile}>
            Настройки
          </BtnConfig>
        </ButtonBox>



      </PopupWrapper>
      {
        openEditProfile &&
        <EditProfilePopup onClose={handleOpenEditProfile}/>
      }
    </>
  )
}