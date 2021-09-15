import {ListItems, Arrange, ProductAndPrice, Product, Price} from "./Cart.styled";
import {Card} from "./components/Card";
import { Title } from '../../components/Title';
import {useState} from "react";
import {CartOrderPopup} from "./popups/CartOrder";
import {Button} from "../../components/Button";
import {PopupWrapper} from "../../components/PopupWrapper";


export const CartPopup = ({onClick, theme, ...props}) => {

  const [openOrder, setOpenOrder] = useState(false);


  const handleClick = () => {
    setOpenOrder(!openOrder)
  }
  return (
    <>
      <PopupWrapper
        onClick={onClick}
        padding={"40px 0 30px"}
        tabPadding={"40px 0 30px"}
        mobPadding={"30px 0 20px"}
        tabWidth={"522px"}
        theme={theme}
      >
        <Title theme={theme}>
          Корзина покупок
        </Title>
        <ListItems>
          <Card theme={theme}/>
          <Card theme={theme}/>
        </ListItems>
        <Arrange {...props}>
          <ProductAndPrice>
            <Product {...props}>
              2 товара
            </Product>
            <Price {...props}>
              5 980 ₽
            </Price>
          </ProductAndPrice>
          <Button
            theme={theme}
            margin="0"
            height="40px"
            onClick={handleClick}
            tabWidth={"170px"}
            mobWidth={"210px"}
            tabMargin={"0"}>
            Оформить заказ
          </Button>
        </Arrange>
      </PopupWrapper>
      {
        openOrder && <CartOrderPopup
          theme={theme}
          onClick={handleClick}
        />
      }
    </>

  )
}