import {Text} from "./CartOutStockPopup.styled";
import {PopupWrapper} from "../../../../components/PopupWrapper";

export const CartOutStockPopup = ({onClick, theme, ...props}) => {
  return (
    <PopupWrapper
      width={"370px"}
      tabWidth={"462px"}
      onClick={onClick}
      theme={theme}
    >
      <Text {...props} >
        Этот товар закончился :(
      </Text>
    </PopupWrapper>
  )
}
