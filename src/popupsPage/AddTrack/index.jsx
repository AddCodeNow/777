import {
  Inner,
  DownLoadBtn,
  AddBtn,
  RemoveBtn,
  CheckBoxInner,
  CheckBoxText
} from "./AddTrackPopup.styled";
import {DropDownMenu} from "./components/DropDown";

import addBtn from './assets/add.svg';
import removeBtn from './assets/remove.svg';
import {CheckBox} from "./components/CheckBox";
import {Button} from "../../components/Button";
import {useState} from "react";
import {Loaded} from "./Loaded";
import {PopupWrapper} from "../../components/PopupWrapper";
import {Title} from "../../components/Title";
import {Input} from "../../components/Input";
import {TextArea} from "../../components/TextArea";

export const AddTrackPopup = ({onClick}) => {

  const [isShowLoaded, setIsShowLoaded] = useState(false);

  const handleLoaded = () => {
    setIsShowLoaded(!isShowLoaded)
  }

  return (
    <PopupWrapper
      onClick={onClick}
      width={"430px"}
      tabWidth={"462px"}
      tabPadding={"40px 50px"}
    >
      <Title>
        Добавить трек
      </Title>

      <Inner>
        <DropDownMenu/>
        <AddBtn>
          <img src={addBtn} alt="drop down icon"/>
        </AddBtn>
      </Inner>

      <Inner marginBot={"40px"}>
        <DropDownMenu/>
        <RemoveBtn>
          <img src={removeBtn} alt="drop down icon"/>
        </RemoveBtn>
      </Inner>


      <Inner marginBot={"15px"}>
        <Input width={"270px"} tabWidth={"262px"} mobWidth={"160px"} type={"text"} placeholder={"Название песни"}/>
        <Input width={"85px"} tabWidth={"85px"} mobWidth={"85px"} type={"text"} placeholder={"Год"}/>
      </Inner>
      <TextArea placeholder={"Тест Песни"}/>
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        placeholder={"Ссылка на клип"}
      />
      <CheckBoxInner>
        <CheckBox margin={"0"}/>
        <CheckBoxText>
          Кавер
        </CheckBoxText>
      </CheckBoxInner>

      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        placeholder={"Ковер на"}/>
      <Input
        margin={"0 0 15px 0"}
        tabMargin={"0 0 15px 0"}
        mobMargin={"0 0 15px 0"}
        placeholder={"Название"}/>
      <DownLoadBtn onClick={handleLoaded}>
        Загрузить
      </DownLoadBtn>
      <Button
        onClick={onClick}
        width={"216px"}
        tabWidth={"216px"}
        mobWidth={"190px"} >
        Готово
      </Button>
      {
        isShowLoaded && <Loaded onClose={handleLoaded}/>
      }
    </PopupWrapper>
  )
}