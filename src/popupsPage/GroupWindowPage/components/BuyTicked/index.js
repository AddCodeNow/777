import {AddressInfo, ClubInfo, Date, EditInfoBandText, IconMap, IconMapBox, Ticked, Wrap} from "./BuyTicked.styled";
import Icon from './assets/homeMap.svg';
import {Button} from "../../../../components/Button";
import edit from "../../assets/editGroupIcon.svg";
import {EditInfoTicked} from "../../GroupWindowPopup.styled";

const BuyTicked = ({show, useAdmin, openEditConcert}) => {

  return (
    <Wrap>
      <IconMapBox>
        {
          show &&
          <IconMap>
            {show && <img src={Icon} alt="icon"/>}
          </IconMap>
        }
      </IconMapBox>
      <Date>
        03.02.21
      </Date>
      <ClubInfo>
        Клуб “Mosaique”
      </ClubInfo>
      <AddressInfo>
        г. Санк-Петербург, Конюшенная пл., 2
      </AddressInfo>
      {
        useAdmin ?
          <EditInfoTicked onClick={openEditConcert} flex="1" marginLeft="auto">
            <img src={edit} alt="icon"/>
            <EditInfoBandText>
              Редактировать концерт
            </EditInfoBandText>
          </EditInfoTicked>
           :
          <Button height="40px" font="14px" line="16px" tabWidth="103px">
            Купить <Ticked>Билет</Ticked>
          </Button>
      }

    </Wrap>
  )
}

export default BuyTicked;