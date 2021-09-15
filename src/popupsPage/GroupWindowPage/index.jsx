import {useState} from "react";

import {
  AddAdminButton,
  AddConcertIcon,
  AddConcertWrap,
  AdminEditBox,
  EditInfoBand,
  Info,
  InfoBand,
  InfoImg, InfoImgBox,
  InfoName,
  InfoText,
  Inner,
  SliderAddProduct,
  SliderAddProductText,
  SliderInner,
} from "./GroupWindowPopup.styled";

import {SliderBoard} from "./components/Slider";
import BuyTicked from "./components/BuyTicked";
import PastConcert from "./components/PastConcert";
import {Title} from "./components/PastConcert/PastConcert.styled";
import {EditGroupPopup} from "./popups/EditGroup";

import addIcon from './assets/addIcon.svg';
import edit from './assets/editGroupIcon.svg';
import InfoImage from '../../assets/img/metallica.png';
import {AddConcertPopup} from "./popups/AddConcert";
import {EditConcertPopup} from "./popups/EditConcert";
import {AddProductPopup} from "./popups/AddProduct";
import {PopupWrapper} from "../../components/PopupWrapper";
import {CloseBtn} from "../../components/CloseIcon";


export const GroupWindowPopup = ({onClick, useAdmin = true, theme, ...props}) => {
  const [openEditGroup, setOpenEditGroup] = useState(false);
  const [openAddConcert, setOpenAddConcert] = useState(false);
  const [openEditConcert, setOpenEditConcert] = useState(false);
  const [openOpenAddProduct, setOpenOpenAddProduct] = useState(false);
  const handleClick = () => {
    setOpenEditGroup(!openEditGroup)
  }
  const handleOpenAddConcert = () => {
    setOpenAddConcert(!openAddConcert)
  }
  const handleOpenEditConcert = () => {
    setOpenEditConcert(!openEditConcert)
  }
  const handleOpenAddProduct = () => {
    setOpenOpenAddProduct(!openOpenAddProduct)
  }

  return (
    <>
      <PopupWrapper
        onClick={onClick}
        tabWidth={"708px"}
        padding={"30px 0 30px"}
        tabPadding={"20px 0 30px"}
        mobPadding={"15px 0 20px"}
        height={"100%"}
        tabHeight={"100%"}
        mobHeight={"100%"}
        top={"26px"}
        right={"26px"}
        mobTop={"81px"}
        mobRight={"30px"}
        stroke="#000"
        mobDisplay={"none"}
        theme={theme}
      >
        {
          useAdmin &&
          <AdminEditBox>
            <AddAdminButton {...props}>
              Добавить админа
            </AddAdminButton>
            <EditInfoBand onClick={handleClick} {...props}>
              <img src={edit} alt="icon"/>
            </EditInfoBand>
          </AdminEditBox>
        }
        <Info>
          <InfoImgBox>
            <InfoImg src={InfoImage} alt="band image"/>
            <CloseBtn
              onClick={onClick}
              stroke="#000"
              mobTop={"15px"}
              mobRight={"15px"}
              display={"none"}
            />
          </InfoImgBox>

          <InfoBand>
            <InfoName>
              Metallica
            </InfoName>
            <InfoText>
              американская метал-группа, образованная в 1981 году,
              в Лос-Анджелесе. Metallica оказала большое влияние на развитие метала и входит (вместе с такими группами
              как Slayer, Megadeth и Anthrax) в «большую четвёрку трэш-метала». Альбомы Metallica были проданы в общей
              сложности в количестве более 110 миллионов экземпляров по всему миру, что делает её одним из самых
              коммерчески успешных металлических коллективов. В 2011 году один из крупнейших журналов о метал-музыке
              Kerrang! в июньском номере признал Metallica лучшей метал-группой последних 30 лет.
            </InfoText>
          </InfoBand>

        </Info>
        <SliderInner>
          {
            useAdmin &&
            <SliderAddProduct onClick={handleOpenAddProduct}>
              <img src={addIcon} alt="add icon"/>
              <SliderAddProductText>
                Добавить
                продукцию
              </SliderAddProductText>
            </SliderAddProduct>
          }
          <SliderBoard useAdmin={useAdmin}/>
        </SliderInner>
        <Inner>
          <BuyTicked
            openEditConcert={handleOpenEditConcert}
            useAdmin={useAdmin}
            show={true}/>
          <BuyTicked
            openEditConcert={handleOpenEditConcert}
            useAdmin={useAdmin}
            show={true}/>
          <BuyTicked
            openEditConcert={handleOpenEditConcert}
            useAdmin={useAdmin}
            show={false}/>
          <BuyTicked
            openEditConcert={handleOpenEditConcert}
            useAdmin={useAdmin}
            show={false}/>
          {
            useAdmin &&
            <AddConcertWrap onClick={handleOpenAddConcert}>
              <AddConcertIcon>
                <img src={addIcon} alt="icon"/>
              </AddConcertIcon>
            </AddConcertWrap>
          }
        </Inner>
        <Title>
          Прошедшие
        </Title>
        <Inner>
          <PastConcert/>
          <PastConcert/>
          <PastConcert/>
          <PastConcert/>
        </Inner>
      </PopupWrapper>
      {
        openEditGroup && <EditGroupPopup closePopup={handleClick}/>
      }
      {
        openAddConcert && <AddConcertPopup closePopup={handleOpenAddConcert}/>
      }
      {
        openEditConcert && <EditConcertPopup closePopup={handleOpenEditConcert}/>
      }
      {
        openOpenAddProduct && <AddProductPopup closePopup={handleOpenAddProduct}/>
      }
    </>
  )
}
