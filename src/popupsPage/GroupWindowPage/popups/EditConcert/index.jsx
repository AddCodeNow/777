import {
  InputBox
} from "../AddConcert/AddConcertPopup.styled";
import {Button} from "../../../../components/Button";
import {DeleteButton, InnerBtn} from "./EditConcertPopup.styled";
import {PopupWrapper} from "../../../../components/PopupWrapper";
import {Title} from "../../../../components/Title";
import {Input} from "../../../../components/Input";

export const EditConcertPopup = ({closePopup}) => {
    return (
      <PopupWrapper
        onClick={closePopup}
        width={"430px"}
        tabWidth={"462px"}
        tabPadding={"40px 50px"}
      >
        <Title mobWidth={"160px"}>
          Редактировать концерт
        </Title>
        <Input
          margin={"0 0 15px 0"}
          tabMargin={"0 0 15px 0"}
          mobMargin={"0 0 15px 0"}
        />
        <InputBox>
          <Input
            width={"235px"}
            tabWidth={"235px"}
            mobWidth={"141px"}
          />
          <Input
            width={"120px"}
            tabWidth={"112px"}
            mobWidth={"104px"}
          />
        </InputBox>
        <InnerBtn>
          <Button
            margin="0 0 15px 0"
            mobWidth="100%"
            tabWidth="170px"
            tabMargin={"0"}
            mobMargin={"0 0 15px 0"}
          >
            Готово
          </Button>
          <DeleteButton>
            Удалить
          </DeleteButton>
        </InnerBtn>
      </PopupWrapper>
    )
}