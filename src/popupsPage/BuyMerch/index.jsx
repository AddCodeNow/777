import {useState} from "react";

import product from './assets/1.png';
import check from './assets/checkbox.svg';

import {Image, ProductName, ProductPrice} from "./BuyMerchPopupstyled";
import {PopupWrapper} from "../../components/PopupWrapper";
import {Button} from "../../components/Button";


export const BuyMerchPopup = ({onClick}) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  }

  return (
    <PopupWrapper
      onClick={onClick}
      width={"430px"}
      tabWidth={"462px"}
    >
      <Image src={product} alt="product img"/>
      <ProductName>
        Футболка “Kindness”
      </ProductName>
      <ProductPrice>
        2 990 ₽
      </ProductPrice>
      {!checked &&
      <Button
        onClick={handleClick}
        width={"230px"}
        tabWidth={"216px"}
        mobWidth={"190px"}
      >
        Положить в корзину
      </Button>}
      {checked &&
      <Button
        width={"47px"}
        tabWidth={"47px"}
        mobWidth={"47px"}
      >
        <img src={check} alt="check icon"/>
      </Button>}
    </PopupWrapper>
  )
}