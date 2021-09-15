import {DonationsBtn} from "./Donations.styled";
import {Button} from "../../components/Button";
import {useState} from "react";
import {PaymentPopup} from "./Payment";
import {PopupWrapper} from "../../components/PopupWrapper";
import {Title} from "../../components/Title";
import {Input} from "../../components/Input";

export const DonationsPopup = ({onClick}) => {

  const [isOpenPayment, setIsOpenPayment] = useState(false);

  const handleOpenPayment = () => {
    setIsOpenPayment(!isOpenPayment);
  }
  return (
    <>

      <PopupWrapper
        width={"430px"}
        tabWidth={"462px"}
        onClick={onClick}
        tabPadding={"40px 50px"}
      >
        <Title>
          На пиво
        </Title>
        <Input
          margin={"0 0 15px 0"}
          tabMargin={"0 0 15px 0"}
          mobMargin={"0 0 15px 0"}
          placeholder={"Сумма"}
        />
        <Button width={"100%"} onClick={handleOpenPayment}>Отправить</Button>
        <DonationsBtn>
          Поддержать просмотром рекламы
        </DonationsBtn>
      </PopupWrapper>
      {
        isOpenPayment &&
        <PaymentPopup onClose={handleOpenPayment}/>
      }
    </>
  )
}