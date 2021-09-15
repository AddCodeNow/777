import {
  InputTitle,
  DeliveryBox,
  Payment,
  Sum,
  Inner
} from "./CartOrder.styled";
import {Button} from "../../../../components/Button";
import {Input} from '../../../../components/Input';
import {PopupWrapper} from "../../../../components/PopupWrapper";
import {Title} from "../../../../components/Title";
import {TextArea} from "../../../../components/TextArea";
import {useState} from "react";
import {CartOutStockPopup} from "../CartOutStock";

export const CartOrderPopup = ({onClick, theme, ...props}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PopupWrapper
        onClick={onClick}
        padding={"40px 30px"}
        tabPadding={"40px 30px"}
        mobPadding={"40px 20px 30px"}
        width={"630px"}
        tabWidth={"522px"}
        mobWidth={"290px"}
        mobHeight={"100%"}
        theme={theme}
      >
        <Title theme={theme}>
          Оформить заказ
        </Title>
        <InputTitle {...props}>
          Контактные данные
        </InputTitle>
        <Inner>
          <Input theme={theme} placeholder="Имя"/>
          <Input theme={theme} placeholder="Фамилия"/>
          <Input theme={theme} placeholder="Email"/>
          <Input theme={theme} placeholder="Телефон"/>
        </Inner>
        <InputTitle {...props}>
          Доставка
        </InputTitle>
        <Inner>
          <Input theme={theme} placeholder="Регион/Область"/>
          <Input theme={theme} placeholder="Город/Населенный пункт"/>
          <Input theme={theme} placeholder="Улица"/>
          <DeliveryBox>
            <Input theme={theme} width={"125px"} tabWidth={"101px"} mobWidth={"101px"} placeholder="Дом"/>
            <Input theme={theme} width={"130px"} tabWidth={"101px"} mobWidth={"101px"} placeholder="Квартира"/>
          </DeliveryBox>
        </Inner>
        <InputTitle {...props}>
          Комментарий
        </InputTitle>
        <TextArea
          theme={theme}
          mobMargin={"0 0 15px 0"}
          placeholder="Оставьте комментарий..."
        />
        <DeliveryBox MarBot="30px">
          <Payment {...props}>
            К оплате:
          </Payment>
          <Sum {...props}>
            5 980 ₽
          </Sum>
        </DeliveryBox>
        <Button
          theme={theme}
          tabWidth={"216px"}
          onClick={() => setOpen(true)}
        >
          Оплатить
        </Button>
      </PopupWrapper>
      {
        open &&
          <CartOutStockPopup
            theme={theme}
            onClick={() => setOpen(false)}
          />
      }
    </>

  )
}