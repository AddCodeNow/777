import {
  CardItem,
  CardItemBox, CardItemCVC, CardItemCVCBox, CardItemCVCDescription, CardItemCVCLine,
  CardItemTitle,
  CardItemWrap, InputCard, InputCVC, InputName, InputYear,
} from "./PaymentPopup.styled";
import {Button} from "../../../components/Button";
import {PopupWrapper} from "../../../components/PopupWrapper";
import {Title} from "../../../components/Title";

export const PaymentPopup = ({onClose}) => {
  return (
    <PopupWrapper
      width={"770px"}
      tabWidth={"708px"}
      tabPadding={"40px 50px"}
      onClick={onClose}
    >
      <Title
        mobWidth={"210px"}
      >
        Укажите платёжные данные
      </Title>

      <CardItem>

        <CardItemBox>
          <CardItemTitle>
            Номер карты:
          </CardItemTitle>
          <InputCard type={"password"} placeholder={"**** **** **** ****"}/>
        </CardItemBox>

        <CardItemWrap>

          <CardItemBox>
            <CardItemTitle>
              Владелец карты:
            </CardItemTitle>
            <InputName type={"text"} placeholder={"Имя латиницей"}/>
          </CardItemBox>

          <CardItemBox>
            <CardItemTitle>
              Срок действия:
            </CardItemTitle>
            <InputYear type={"text"} placeholder={"ММ / ГГ"}/>
          </CardItemBox>

        </CardItemWrap>

      </CardItem>

      <CardItemCVC>
        <CardItemCVCLine/>
        <CardItemCVCBox>
          <CardItemTitle display={"none"}>
            CVV2/CVC2:
          </CardItemTitle>
          <InputCVC type={"password"} placeholder={"****"}/>
          <CardItemCVCDescription>
            Цифровой код на обратной стороне
          </CardItemCVCDescription>
        </CardItemCVCBox>
      </CardItemCVC>

      <Button width={"230px"} tabWidth={"216px"} mobWidth={"100%"}>
        Оплатить
      </Button>
    </PopupWrapper>
  )
}